



function Pagination({ total, record, update, Next, Prev }) {

    let n = Math.ceil(total / record)

    let page = []

    for (let i = 1; i <= n; i++) {
        page.push(i)
    }
    return (

        <div>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={Prev}>
                        <i class="fa-solid fa-arrow-left"></i> Prev
                    </a>
                </li>

                {page.map((item) => (
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={() => { update(item) }}>{item}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a href="#" className="page-link" onClick={Next}>
                      Next  <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </li>

            </ul>



        </div>
    )
}
export default Pagination;