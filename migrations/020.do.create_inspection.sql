CREATE TABLE IF NOT EXISTS inspection (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    inspection_status TEXT,
    scheduled_on DATE,
    inspection_date DATE,
    approved_date DATE,
    failed_date DATE
);