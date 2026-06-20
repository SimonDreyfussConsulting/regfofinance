import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CashFlowChart, CategoryDonut } from "@/components/DashboardCharts";
import { DrillRow } from "@/components/DrillRow";
import { formatUsd } from "@/lib/format";
import {
  getAccountBalances,
  getMonthlyCashFlow,
  getNetWorthSummary,
  getSpendingByCategory,
} from "@/lib/queries";

// Always read fresh figures from the database.
export const dynamic = "force-dynamic";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-xl font-semibold tabular-nums text-foreground">{value}</p>
      </CardContent>
    </Card>
  );
}

export default async function HomePage() {
  const [summary, accounts, categorySpend, cashFlow] = await Promise.all([
    getNetWorthSummary(),
    getAccountBalances(),
    getSpendingByCategory(),
    getMonthlyCashFlow(),
  ]);

  const cashFlowData = cashFlow.map((m) => ({
    month: m.month,
    Income: m.income,
    Spending: m.spending,
  }));

  const donutData = categorySpend.map((c) => ({ name: c.name, value: c.total }));

  return (
    <div className="space-y-6">
      <section>
        <p className="text-sm font-medium text-muted-foreground">Net worth</p>
        <h1 className="mt-1 text-4xl font-semibold tabular-nums tracking-tight text-foreground">
          {formatUsd(summary.netWorth)}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {formatUsd(summary.assets)} in assets minus {formatUsd(summary.debts)} in debts
        </p>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Cash" value={formatUsd(summary.cash)} />
        <Stat label="Investments" value={formatUsd(summary.investments)} />
        <Stat label="Real estate" value={formatUsd(summary.realEstate)} />
        <Stat label="Debts" value={formatUsd(summary.debts)} />
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Monthly cash flow</CardTitle>
        </CardHeader>
        <CardContent>
          <CashFlowChart data={cashFlowData} />
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Spending by category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {donutData.length > 0 && <CategoryDonut data={donutData} />}
            <div className="overflow-hidden rounded-lg border border-border">
              {categorySpend.map((category) => (
                <DrillRow
                  key={category.id}
                  title={category.name}
                  value={formatUsd(category.total)}
                  href={`/categories/${category.id}`}
                />
              ))}
              {categorySpend.length === 0 && (
                <p className="px-4 py-6 text-sm text-muted-foreground">
                  No spending found. Run the seed script.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-border">
              {accounts.map((account) => (
                <DrillRow
                  key={account.id}
                  title={account.name}
                  subtitle={`${account.institution} · ${account.type}`}
                  value={formatUsd(account.balance)}
                  valueClassName={account.balance < 0 ? "text-rose-600" : undefined}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
