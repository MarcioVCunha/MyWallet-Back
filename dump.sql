--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: money; Type: TABLE; Schema:  Owner: postgres
--

CREATE TABLE money (
    id integer NOT NULL,
    type text,
    value numeric,
    "userId" integer,
    date text,
    description text
);


ALTER TABLE money OWNER TO postgres;

--
-- Name: money_id_seq; Type: SEQUENCE; Schema:  Owner: postgres
--

CREATE SEQUENCE money_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE money_id_seq OWNER TO postgres;

--
-- Name: money_id_seq; Type: SEQUENCE OWNED BY; Schema:  Owner: postgres
--

ALTER SEQUENCE money_id_seq OWNED BY money.id;


--
-- Name: sessions; Type: TABLE; Schema:  Owner: postgres
--

CREATE TABLE sessions (
    id integer NOT NULL,
    "userId" integer,
    token text
);


ALTER TABLE sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema:  Owner: postgres
--

CREATE SEQUENCE sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema:  Owner: postgres
--

ALTER SEQUENCE sessions_id_seq OWNED BY sessions.id;


--
-- Name: users; Type: TABLE; Schema:  Owner: postgres
--

CREATE TABLE users (
    id integer NOT NULL,
    name text,
    email text,
    password text
);


ALTER TABLE users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema:  Owner: postgres
--

CREATE SEQUENCE users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema:  Owner: postgres
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: money id; Type: DEFAULT; Schema:  Owner: postgres
--

ALTER TABLE ONLY money ALTER COLUMN id SET DEFAULT nextval('money_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema:  Owner: postgres
--

ALTER TABLE ONLY sessions ALTER COLUMN id SET DEFAULT nextval('sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema:  Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: money; Type: TABLE DATA; Schema:  Owner: postgres
--

COPY money (id, type, value, "userId", date, description) FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema:  Owner: postgres
--

COPY sessions (id, "userId", token) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema:  Owner: postgres
--

COPY users (id, name, email, password) FROM stdin;
\.


--
-- Name: money_id_seq; Type: SEQUENCE SET; Schema:  Owner: postgres
--

SELECT pg_catalog.setval('money_id_seq', 33, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema:  Owner: postgres
--

SELECT pg_catalog.setval('sessions_id_seq', 86, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema:  Owner: postgres
--

SELECT pg_catalog.setval('users_id_seq', 20, true);


--
-- PostgreSQL database dump complete
--

