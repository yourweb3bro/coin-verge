import KpiCard from "../layout/kpiCard";
import { motion } from "framer-motion";

const kpis = [
    {
        title: "6M+",
        description: "Active users"
    },
    {
        title: "24/7",
        description: "Users support"
    },
    {
        title: "160+",
        description: "Countries"
    },
    {
        title: "$22B+",
        description: "Trade volume"
    },
]

export default function KpiCards() {
    return (
        
        <div className="flex flex-wrap md:gap-8 px-0 py-8 md:px-12 md:py-16 gap-6 justify-center">
                {kpis.map((kpi) => (
                <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                >
                <KpiCard
                    key={kpi.title}
                    title={kpi.title}
                    description={kpi.description}
                />
                </motion.div>
                ))}
        </div>
    );
}