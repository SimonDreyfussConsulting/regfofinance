import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DrillRow } from "@/components/DrillRow";
import { formatUsd } from "@/lib/format";
import {
  getCategoryName,
  getCategorySpendTotal,
  getMerchantsForCategory,
} from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const [name, merchants, total] = await Promise.all([
    getCategoryName(params.id),
    getMerchantsForCategory(params.id),
    getCategorySpendTotal(params.id),
  ]);

  if (!name) notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Net worth", href: "/" }, { label: name }]} />

      <section>
        <p className="text-sm font-medium text-muted-foreground">{name} spending</p>
        <h1 className="mt-1 text-3xl font-semibold tabular-nums tracking-tight text-foreground">
          {formatUsd(total)}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Across {merchants.length} merchant{merchants.length === 1 ? "" : "s"}
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Merchants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-lg border border-border">
            {merchants.map((merchant) => (
              <DrillRow
                key={merchant.id}
                title={merchant.name}
                subtitle={`${merchant.count} transaction${merchant.count === 1 ? "" : "s"}`}
                value={formatUsd(merchant.total)}
                href={`/merchants/${merchant.id}`}
              />
            ))}
            {merchants.length === 0 && (
              <p className="px-4 py-6 text-sm text-muted-foreground">
                No merchant spending in this category.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
