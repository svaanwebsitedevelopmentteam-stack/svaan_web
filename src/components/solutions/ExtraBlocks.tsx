/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

export function ExtraBlocks({ extras }: { extras: any }) {
    if (!extras.deliverables && !extras.engagement && !extras.serviceLevels) return null;

    return (
        <section className="py-16 bg-[var(--t-bg-surface)] border-y border-[var(--t-border)]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-16">
                
                {extras.deliverables && (
                    <div>
                        <h3 className="type-h3 text-[var(--t-text)] mb-6">Deliverables</h3>
                        <div className="flex flex-wrap gap-3">
                            {extras.deliverables.map((item: string, i: number) => (
                                <span key={i} className="bg-[var(--t-bg-card)] border border-[var(--t-border)] text-[var(--t-text-secondary)] type-body-sm px-4 py-2 rounded-[4px]">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {extras.engagement && (
                    <div>
                        <h3 className="type-h3 text-[var(--t-text)] mb-6">Engagement models</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {extras.engagement.map((model: any, i: number) => (
                                <div key={i} className="bg-[var(--t-bg-card)] border border-[var(--t-border)] rounded-[8px] p-6">
                                    <h4 className="type-body font-medium text-[var(--t-text)] mb-2">{model.title}</h4>
                                    <p className="type-body-sm text-[var(--t-text-secondary)]">{model.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {extras.serviceLevels && (
                    <div>
                        <h3 className="type-h3 text-[var(--t-text)] mb-6">Service levels</h3>
                        <p className="type-body-sm text-[var(--t-text-secondary)] max-w-[860px] mb-8">
                            {extras.serviceLevels.statement}
                        </p>
                        {extras.serviceLevels.rows && extras.serviceLevels.rows.length > 0 && extras.serviceLevels.rows.every((row: string[]) => row.every(cell => cell.trim().length > 0)) && (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <tbody>
                                        {extras.serviceLevels.rows.map((row: string[], i: number) => (
                                            <tr key={i} className="border-b border-[var(--t-border)] last:border-0">
                                                {row.map((cell: string, j: number) => (
                                                    <td key={j} className={`py-4 pr-6 ${j === 0 ? 'type-body font-medium text-[var(--t-text)] w-1/3' : 'type-body-sm text-[var(--t-text-secondary)]'}`}>
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}
