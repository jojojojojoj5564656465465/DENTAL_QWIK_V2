import { component$ } from "@builder.io/qwik";
import { flex } from "~/styles/index.css";
import * as s from "./soins.css";

interface TableProps {
    soin: string;
    tarif: string;
    remboursementSecu: string;
    remboursementMutuelle: "Selon contrat" | "Non remboursé";
}

const data: TableProps[] = [
    { soin: "Détartrage", tarif: "50 €", remboursementSecu: "70 %", remboursementMutuelle: "Selon contrat" },
    { soin: "Traitement de carie", tarif: "80 €", remboursementSecu: "70 %", remboursementMutuelle: "Selon contrat" },
    { soin: "Extraction dentaire", tarif: "60 €", remboursementSecu: "70 %", remboursementMutuelle: "Selon contrat" },
    { soin: "Blanchiment dentaire", tarif: "300 €", remboursementSecu: "Non remboursé", remboursementMutuelle: "Non remboursé" }
];

const Table = component$(() => {
    return <div class={flex({ direction: 'column', size: 'small', theme: 'whiteBg', side: 5 })}    >
        <table class={s.pricingTable}>
            <thead>
                <tr>
                    <th class={s.tableHeader}>Soin</th>
                    <th class={s.tableHeader}>Tarif (à partir de)</th>
                    <th class={s.tableHeader}>Remboursement Sécu</th>
                    <th class={s.tableHeader}>Remboursement Mutuelle</th>
                </tr>
            </thead>
            <tbody>
               
                {data.map((row) => (
                    <tr key={row.soin} class={s.tableRowHover}>
                        <td class={s.tableCell}>{row.soin}</td>
                        <td class={s.tableCell}>{row.tarif}</td>
                        <td class={s.tableCell}>{row.remboursementSecu}</td>
                        <td class={s.tableCell}>{row.remboursementMutuelle}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
});


export default Table;

