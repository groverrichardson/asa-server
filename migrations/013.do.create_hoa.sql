CREATE TABLE IF NOT EXISTS hoa (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    rank TEXT,
    company TEXT,
    hoa_name TEXT,
    phone VARCHAR(10),
    email TEXT,
    street TEXT,
    city TEXT,
    hoa_state TEXT,
    zip TEXT
);