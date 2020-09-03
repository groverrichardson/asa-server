CREATE TABLE IF NOT EXISTS pto (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pto_status TEXT,
    utility TEXT,
    pto_start_date DATE,
    submitted_date DATE,
    issued_date DATE,
    failed_date DATE
);