import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DrillRow } from "@/components/DrillRow";
import { formatDate, formatUsdCents } from "@/lib/format";
import { getMerchantName, getTransactionsForMerchant } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function MerchantPage({ params }: { params: { id: string } }) {
  const [name, txns] = await Promise.all([
    getMerchantName(params.id),
    getTransactionsForMerchant(params.id),
  ]);

  if (!name) notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[{ label: "Net worth", href: "/" }, { label: name }]}
      />

      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {txns.length} transaction{txns.length === 1 ? "" : "s"}
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-lg border border-border">
            {txns.map((txn) => (
              <DrillRow
                key={txn.id}
                title={formatDate(txn.postedDate)}
                subtitle={`${txn.accountName}${txn.hasLineItems ? " · itemized receipt" : ""}`}
                value={formatUsdCents(txn.amount)}
                valueClassName={txn.amount < 0 ? "text-rose-600" : "text-emerald-600"}
                href={`/transactions/${txn.id}`}
              />
            ))}
            {txns.length === 0 && (
              <p className="px-4 py-6 text-sm text-muted-foreground">
                No transactions for this merchant.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
