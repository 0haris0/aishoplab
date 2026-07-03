import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Languages,
  LayoutDashboard,
  PackageSearch,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const navItems = [
  {label: 'Overview', icon: LayoutDashboard, active: true},
  {label: 'Products', icon: PackageSearch},
  {label: 'Translations', icon: Languages},
  {label: 'Content', icon: FileText},
  {label: 'Analytics', icon: BarChart3},
];

const issueRows = [
  {
    product: 'Classic leather backpack',
    issue: 'Missing SEO description',
    score: 62,
    severity: 'High',
  },
  {
    product: 'Minimal cotton hoodie',
    issue: 'Weak product description',
    score: 71,
    severity: 'Medium',
  },
  {
    product: 'Everyday running shoes',
    issue: 'Missing image alt text',
    score: 78,
    severity: 'Medium',
  },
];

const scoreBars = [68, 82, 76, 91, 84, 88, 94];

const NexGenDashboardPreview = () => {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div className="absolute -left-10 top-1/4 h-40 w-40 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_35px_100px_-35px_rgba(15,23,42,0.35)]">
        <div className="flex h-11 items-center justify-between border-b border-gray-200 bg-gray-50 px-4 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="hidden rounded-md border border-gray-200 bg-white px-5 py-1 text-[10px] font-medium text-gray-400 sm:block">
            admin.shopify.com/store/demo/apps/nexgen
          </div>
          <span className="text-[10px] font-semibold text-gray-400">LIVE PREVIEW</span>
        </div>

        <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[190px_1fr]">
          <aside className="hidden border-r border-gray-200 bg-gray-950 p-4 text-white lg:block">
            <div className="flex items-center gap-2 px-2 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">NexGen</p>
                <p className="text-[10px] text-gray-500">Store Growth OS</p>
              </div>
            </div>

            <nav className="mt-6 space-y-1">
              {navItems.map(({label, icon: Icon, active}) => (
                <div
                  key={label}
                  className={
                    active
                      ? 'flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 text-xs font-medium text-white'
                      : 'flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-500'
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </nav>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-gray-400">AI credits</span>
                <span className="text-[10px] font-semibold text-indigo-300">72%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
              </div>
              <p className="mt-2 text-[10px] text-gray-500">1,800 of 2,500 remaining</p>
            </div>

            <div className="absolute bottom-5 left-4 flex items-center gap-3 px-2 text-gray-500">
              <Settings className="h-4 w-4" />
              <span className="text-xs">Settings</span>
            </div>
          </aside>

          <div className="bg-[#f7f8fb] p-4 sm:p-6 lg:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <span>Overview</span>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-gray-700">Store health</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-950 sm:text-2xl">
                  Good morning, Haris
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Your catalog has 59 opportunities ready for review.
                </p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-950 px-4 py-2.5 text-xs font-semibold text-white shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Analyze store
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-500">Store score</span>
                  <div className="rounded-md bg-indigo-50 p-1.5 text-indigo-600">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-2xl font-semibold text-gray-950">78</span>
                  <span className="pb-1 text-xs text-gray-400">/100</span>
                </div>
                <p className="mt-1 text-[10px] font-medium text-emerald-600">+6 points this month</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-500">Issues found</span>
                  <div className="rounded-md bg-amber-50 p-1.5 text-amber-600">
                    <AlertTriangle className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="mt-3 text-2xl font-semibold text-gray-950">59</div>
                <p className="mt-1 text-[10px] text-gray-400">Across 34 products</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-500">AI fixes applied</span>
                  <div className="rounded-md bg-emerald-50 p-1.5 text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="mt-3 text-2xl font-semibold text-gray-950">126</div>
                <p className="mt-1 text-[10px] font-medium text-emerald-600">18 this week</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-500">Revenue tracked</span>
                  <div className="rounded-md bg-violet-50 p-1.5 text-violet-600">
                    <CircleDollarSign className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="mt-3 text-2xl font-semibold text-gray-950">$18.4k</div>
                <p className="mt-1 text-[10px] font-medium text-emerald-600">+14.2% vs last period</p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Priority issues</p>
                    <p className="mt-0.5 text-[10px] text-gray-400">Products with the highest growth impact</p>
                  </div>
                  <button className="flex items-center gap-1 text-[10px] font-semibold text-indigo-600">
                    View all
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>

                <div className="divide-y divide-gray-100">
                  {issueRows.map((row, index) => (
                    <div
                      key={row.product}
                      className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={
                            index === 0
                              ? 'h-9 w-9 flex-none rounded-lg bg-gradient-to-br from-amber-100 to-orange-200'
                              : index === 1
                                ? 'h-9 w-9 flex-none rounded-lg bg-gradient-to-br from-gray-200 to-gray-400'
                                : 'h-9 w-9 flex-none rounded-lg bg-gradient-to-br from-sky-100 to-indigo-200'
                          }
                        />
                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-semibold text-gray-800">
                            {row.product}
                          </p>
                          <p className="truncate text-[10px] text-gray-400">{row.issue}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={
                            row.severity === 'High'
                              ? 'hidden rounded-full bg-red-50 px-2 py-1 text-[9px] font-semibold text-red-600 sm:inline-flex'
                              : 'hidden rounded-full bg-amber-50 px-2 py-1 text-[9px] font-semibold text-amber-600 sm:inline-flex'
                          }
                        >
                          {row.severity}
                        </span>
                        <span className="w-6 text-right text-[11px] font-semibold text-gray-600">
                          {row.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 bg-gray-50/70 p-3">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-[10px] font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    Fix selected products with AI
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Catalog score</p>
                    <p className="mt-0.5 text-[10px] text-gray-400">Last 7 audits</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-600">
                    Improving
                  </span>
                </div>

                <div className="mt-5 flex h-28 items-end gap-2">
                  {scoreBars.map((height, index) => (
                    <div key={`${height}-${index}`} className="flex h-full flex-1 items-end">
                      <div
                        style={{height: `${height}%`}}
                        className={
                          index === scoreBars.length - 1
                            ? 'w-full rounded-t bg-indigo-600'
                            : 'w-full rounded-t bg-indigo-100'
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-gray-400">Current score</span>
                    <span className="font-semibold text-gray-900">78 / 100</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-gray-950 p-3 text-white">
                  <div className="flex items-center gap-2">
                    <div className="rounded-md bg-white/10 p-1.5">
                      <Search className="h-3.5 w-3.5 text-indigo-300" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold">Next best action</p>
                      <p className="text-[9px] text-gray-400">Fix 12 missing SEO descriptions</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[9px] text-emerald-300">
                    <Check className="h-3 w-3" />
                    Estimated impact: high
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NexGenDashboardPreview;
