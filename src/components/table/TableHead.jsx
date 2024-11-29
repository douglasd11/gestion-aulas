import { arrayOf, bool, func, shape, string } from "../../tools/Types"
import ColHead from "./ColHead"

function TableHead({ cols, actions, actionsConfig,sortable }) {
    return (
        <thead>
            <tr>
                {
                    cols.map((col, index) => (
                        <ColHead
                            key={index}
                            title={col.label}
                            sortable={()=>{
                                sortable(col.key)
                            }}
                        />
                    ))
                }
                {
                    actions && <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                        <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                           {
                            actionsConfig.label || " Acciones"
                           }
                        </p>
                    </th>
                }
            </tr>
        </thead>
    )
}

TableHead.propTypes = {
    cols: arrayOf(
        shape({
            key: string.isRequired,
            label: string.isRequired
        })
    ).isRequired,
    actions: bool,
    actionsConfig: shape({
        label: string.isRequired
    }),
    sortable: func
}

export default TableHead