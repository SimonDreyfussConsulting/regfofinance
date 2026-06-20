CREATE TYPE "public"."account_type" AS ENUM('depository', 'credit', 'investment', 'loan', 'hsa', 'other');--> statement-breakpoint
CREATE TYPE "public"."ingestion_strategy" AS ENUM('filler', 'plaid', 'simplefin', 'teller', 'mailbox', 'document', 'scraper', 'manual');--> statement-breakpoint
CREATE TYPE "public"."rate_type" AS ENUM('fixed', 'variable');--> statement-breakpoint
CREATE TABLE "accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"external_id" text NOT NULL,
	"name" text NOT NULL,
	"institution" text NOT NULL,
	"type" "account_type" NOT NULL,
	"currency" text DEFAULT 'USD' NOT NULL,
	"ingestion_strategy" "ingestion_strategy" NOT NULL,
	"last_synced" timestamp with time zone,
	CONSTRAINT "accounts_external_id_unique" UNIQUE("external_id")
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"parent_id" uuid,
	CONSTRAINT "categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "holdings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"account_id" uuid NOT NULL,
	"symbol" text NOT NULL,
	"quantity" numeric(18, 6) NOT NULL,
	"cost_basis" numeric(14, 2) NOT NULL,
	"as_of_date" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "liabilities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"account_id" uuid NOT NULL,
	"principal" numeric(14, 2) NOT NULL,
	"rate" numeric(6, 3) NOT NULL,
	"rate_type" "rate_type" NOT NULL,
	"minimum_payment" numeric(14, 2) NOT NULL,
	"payoff_terms" text NOT NULL,
	"term_months" integer
);
--> statement-breakpoint
CREATE TABLE "line_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"transaction_id" uuid NOT NULL,
	"name" text NOT NULL,
	"quantity" numeric(14, 4) NOT NULL,
	"unit_price" numeric(14, 2) NOT NULL,
	"line_total" numeric(14, 2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "merchants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"canonical_name" text NOT NULL,
	"aliases" text[] DEFAULT '{}' NOT NULL,
	CONSTRAINT "merchants_canonical_name_unique" UNIQUE("canonical_name")
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"external_id" text NOT NULL,
	"account_id" uuid NOT NULL,
	"posted_date" date NOT NULL,
	"amount" numeric(14, 2) NOT NULL,
	"raw_description" text NOT NULL,
	"merchant_id" uuid,
	"category_id" uuid,
	"source_strategy" "ingestion_strategy" NOT NULL,
	CONSTRAINT "transactions_external_id_unique" UNIQUE("external_id")
);
--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "holdings" ADD CONSTRAINT "holdings_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "liabilities" ADD CONSTRAINT "liabilities_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "line_items" ADD CONSTRAINT "line_items_transaction_id_transactions_id_fk" FOREIGN KEY ("transaction_id") REFERENCES "public"."transactions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_merchant_id_merchants_id_fk" FOREIGN KEY ("merchant_id") REFERENCES "public"."merchants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;