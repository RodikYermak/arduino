function logData(data: unknown) {
    let value: string;
    if (typeof data === 'string') {
        value = data;
    }
}

enum Values {
    FIRST,
    SECOND,
}

function fn(value: Values) {
    switch (value) {
        case Values.FIRST:
            return 1;
        case Values.SECOND:
            return 2;
        default:
            const exhaustiveCheck: never = value;
            return value;
    }
}

fn(Values.FIRST);
fn(Values.SECOND);

function fnVoid() {
    console.log();
}

fnVoid();

type Fn = (arg: number, arg2: string) => void;

interface Address {
    city?: string;
    street?: string;
    coords: number[];
}

type User = {
    firstname: string;
    age: number;
    address: Address;
};

const user: User[] = [
    {
        address: {
            city: 'San Diego',
            street: 'East Village',
            coords: [25, 12],
        },
        firstname: 'Rod',
        age: 36,
    },
];

type ComponentProps = {
    className: string;
    color: 'red' | 'green';
};

type ApiResponse<T> = {
    status: 'success' | 'error';
    data?: T;
};

type onClick = (event: HTMLElement) => void;

type Color = 'red' | 'green' | 'blue';

const color: Color = 'blue';7



// timestamp: 37:09
// https://www.youtube.com/watch?v=LWtHl__oEWc&ab_channel=UlbiTV
