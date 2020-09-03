CREATE TABLE IF NOT EXISTS finance (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    finance_type TEXT,
    finance_name TEXT,
    finance_status TEXT,
    amount TEXT,
    epc_amount_solkraft TEXT,
    credit_approved_date DATE,
    account_created_date DATE,
    m1_requested_date DATE,
    m1_received_date DATE,
    m1_5_requested_date DATE,
    m1_5_received_date DATE,
    m2_requested_date DATE,
    m2_received_date DATE,
    m3_requested_date DATE,
    m3_received_date DATE,
    m4_requested_date DATE,
    m4_received_date DATE,
    hdm_pay_req_date DATE,
    hdm_pay_rec_date DATE,
    finance_notes TEXT
);