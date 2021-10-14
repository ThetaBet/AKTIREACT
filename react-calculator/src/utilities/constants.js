const DIGITS = [
    {
        value: 7,
        key: "7",
        type: "M"
    },
    {
        value: 8,
        key: "8",
        type: "M"
    },
    {
        value: 9,
        key: "9",
        type: "M"
    },
    {
        value: 4,
        key: "4",
        type: "M"
    },
    {
        value: 5,
        key: "5",
        type: "M"
    },
    {
        value: 6,
        key: "6",
        type: "M"
    },
    {
        value: 1,
        key: "1",
        type: "M"
    },
    {
        value: 2,
        key: "2",
        type: "M"
    },
    {
        value: 3,
        key: "3",
        type: "M"
    },
    {
        value: 0,
        key: "0",
        type: "L"
    },
    {
        value: ".",
        key: ",",
        type: "M"
    }
];

const OPERATORS = [
    {
        value: "/",
        key: ":",
        type: "L"
    },
    {
        value: "*",
        key: "X",
        type: "L"
    }, 
    {
        value: "-",
        key: "-",
        type: "L"
    }, 
    {
        value: "+",
        key: "+",
        type: "L"
    },
    {
        value: 'canc',
        key: 'CE',
        type: 'M',
        isSpecial: true
    },
    {
        value: "backSpace",
        key: "->",
        type: 'M',
        isSpecial: true
    },
    {
        value: "percentage",
        key: "%",
        type: "M",
        isSpecial: true
    },
    {
        value: "=",
        key: "=",
        type: "L"
    }
];

export {
    DIGITS,
    OPERATORS
}