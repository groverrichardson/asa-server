CREATE TABLE IF NOT EXISTS contract (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    contract_status TEXT,
    sent_date DATE,
    executed_date DATE,
    show_production_info TEXT
);