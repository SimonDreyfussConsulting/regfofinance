import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate, formatQuantity, formatUsdCents } from "@/lib/format";
import { getLineItems, getLineItemsTotal, getTransaction } from "@/lib/queries";

export const dynamic = "force-dynamic";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

export default async function TransactionPage({ params }: { params: { id: string } }) {
  const transaction = await getTransaction(params.id);
  if (!transaction) notFound();

  const [lineItems, lineItemsTotal] = await Promise.all([
    getLineItems(transaction.id),
    getLineItemsTotal(transaction.id),
  ]);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Net worth", href: "/" },
          ...(transaction.merchantName
            ? [{ label: transaction.merchantName }]
            : []),
          { label: "Transaction" },
        ]}
      />

      <section>
        <p className="text-sm font-medium text-muted-foreground">
          {transaction.merchantName ?? transaction.rawDescription}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tabular-nums tracking-tight text-foreground">
          {formatUsdCents(transaction.amount)}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {formatDate(transaction.postedDate)}
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="divide-y divide-border">
            <DetailRow label="Account" value={transaction.accountName} />
            <DetailRow label="Merchant" value={transaction.merchantName ?? "Not resolved"} />
            <DetailRow label="Category" value={transaction.categoryName ?? "Uncategorized"} />
            <DetailRow label="Description" value={transaction.rawDescription} />
            <DetailRow label="Source" value={transaction.sourceStrategy} />
          </dl>
        </CardContent>
      </Card>

      {lineItems.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Receipt detail</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="py-2 pr-3 font-medium">Item</th>
                    <th className="py-2 px-3 text-right font-medium">Qty</th>
                    <th className="py-2 px-3 text-right font-medium">Unit</th>
                    <th className="py-2 pl-3 text-right font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item) => (
                    <tr key={item.id} className="border-b border-border last:border-0">
                      <td className="py-2 pr-3 text-foreground">{item.name}</td>
                      <td className="py-2 px-3 text-right tabular-nums text-foreground">
                        {formatQuantity(item.quantity)}
                      </td>
                      <td className="py-2 px-3 text-right tabular-nums text-foreground">
                        {formatUsdCents(item.unitPrice)}
                      </td>
                      <td className="py-2 pl-3 text-right tabular-nums text-foreground">
                        {formatUsdCents(item.lineTotal)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-2 pr-3 font-medium text-foreground" colSpan={3}>
                      Line items total
                    </td>
                    <td className="py-2 pl-3 text-right font-semibold tabular-nums text-foreground">
                      {formatUsdCents(lineItemsTotal)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
