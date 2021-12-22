import React from 'react'

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing { from } to { to } of { size } Results
    </span>
);

const options = {
    paginationSize: 3,
    pageStartIndex: 1,
    alwaysShowAllBtns: true, // Always show next and previous button
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '25', value: 25
    }, {
        text: '50', value: 50
    }]
};

export { options }
