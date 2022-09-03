function Filter() {
    return `
        <div class="filter-btn">
            <a id="one" href="#" data-type="sortcheck"><i class="fa fa-check-circle"></i></a>
            <a id="two" href="#" data-type="sortdown"><i class="fa fa-sort-alpha-down"></i></a>
            <a id="three" href="#" data-type="sortup"><i class="fa fa-sort-alpha-up"></i></a>
            <a id="all" href="#" data-type="sorttime"><i class="fa fa-clock"></i></a>
            <span class="toggle-btn">
                <i class="fa fa-filter"></i>
                <i class="fa fa-times"></i>
            </span>
        </div>
    `
}

export default Filter