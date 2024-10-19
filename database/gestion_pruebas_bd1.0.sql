--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

-- Started on 2024-10-19 00:41:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 224 (class 1259 OID 16451)
-- Name: casos_prueba; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.casos_prueba (
    id integer NOT NULL,
    id_caso_uso integer,
    titulo character varying(255),
    descripcion text,
    estado character varying(50),
    fecha_ejecucion date,
    creado_por integer,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.casos_prueba OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16450)
-- Name: casos_prueba_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.casos_prueba_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.casos_prueba_id_seq OWNER TO postgres;

--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 223
-- Name: casos_prueba_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.casos_prueba_id_seq OWNED BY public.casos_prueba.id;


--
-- TOC entry 222 (class 1259 OID 16436)
-- Name: casos_uso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.casos_uso (
    id integer NOT NULL,
    id_proyecto integer,
    titulo character varying(255) NOT NULL,
    descripcion text,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.casos_uso OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16435)
-- Name: casos_uso_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.casos_uso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.casos_uso_id_seq OWNER TO postgres;

--
-- TOC entry 4912 (class 0 OID 0)
-- Dependencies: 221
-- Name: casos_uso_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.casos_uso_id_seq OWNED BY public.casos_uso.id;


--
-- TOC entry 226 (class 1259 OID 16471)
-- Name: defectos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.defectos (
    id integer NOT NULL,
    id_caso_prueba integer,
    descripcion text NOT NULL,
    estado character varying(50) DEFAULT 'abierto'::character varying,
    prioridad character varying(50) DEFAULT 'media'::character varying,
    creado_por integer,
    asignado_a integer,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.defectos OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16470)
-- Name: defectos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.defectos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.defectos_id_seq OWNER TO postgres;

--
-- TOC entry 4913 (class 0 OID 0)
-- Dependencies: 225
-- Name: defectos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.defectos_id_seq OWNED BY public.defectos.id;


--
-- TOC entry 220 (class 1259 OID 16420)
-- Name: proyectos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proyectos (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion text,
    fecha_inicio date,
    fecha_fin date,
    estado character varying(50) DEFAULT 'en_progreso'::character varying,
    creado_por integer,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.proyectos OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16419)
-- Name: proyectos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proyectos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proyectos_id_seq OWNER TO postgres;

--
-- TOC entry 4914 (class 0 OID 0)
-- Dependencies: 219
-- Name: proyectos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proyectos_id_seq OWNED BY public.proyectos.id;


--
-- TOC entry 218 (class 1259 OID 16405)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre_usuario character varying(255) NOT NULL,
    correo_electronico character varying(255) NOT NULL,
    contrasena character varying(255) NOT NULL,
    rol character varying(50) DEFAULT 'tester'::character varying,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    nombre character varying(255),
    apellido character varying(255)
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16404)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_seq OWNER TO postgres;

--
-- TOC entry 4915 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 4723 (class 2604 OID 16454)
-- Name: casos_prueba id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.casos_prueba ALTER COLUMN id SET DEFAULT nextval('public.casos_prueba_id_seq'::regclass);


--
-- TOC entry 4721 (class 2604 OID 16439)
-- Name: casos_uso id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.casos_uso ALTER COLUMN id SET DEFAULT nextval('public.casos_uso_id_seq'::regclass);


--
-- TOC entry 4725 (class 2604 OID 16474)
-- Name: defectos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.defectos ALTER COLUMN id SET DEFAULT nextval('public.defectos_id_seq'::regclass);


--
-- TOC entry 4718 (class 2604 OID 16423)
-- Name: proyectos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos ALTER COLUMN id SET DEFAULT nextval('public.proyectos_id_seq'::regclass);


--
-- TOC entry 4715 (class 2604 OID 16408)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 4903 (class 0 OID 16451)
-- Dependencies: 224
-- Data for Name: casos_prueba; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.casos_prueba (id, id_caso_uso, titulo, descripcion, estado, fecha_ejecucion, creado_por, fecha_creacion) FROM stdin;
1	1	Crear Usuario Correctamente	Prueba para verificar que un usuario se crea correctamente	completado	2024-10-05	1	2024-10-18 18:54:09.158271
2	2	Login con Usuario Incorrecto	Prueba para verificar el inicio de sesión con datos incorrectos	completado	2024-10-05	1	2024-10-18 18:54:09.158271
3	3	Agregar Producto al Catálogo	Prueba para verificar que un producto se agrega correctamente	en_progreso	2024-10-06	2	2024-10-18 18:54:09.158271
4	4	Compra de Producto con Tarjeta	Prueba para verificar que se puede realizar una compra con tarjeta	pendiente	2024-10-07	1	2024-10-18 18:54:09.158271
\.


--
-- TOC entry 4901 (class 0 OID 16436)
-- Dependencies: 222
-- Data for Name: casos_uso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.casos_uso (id, id_proyecto, titulo, descripcion, fecha_creacion) FROM stdin;
1	1	Gestión de Usuarios	Caso de uso para gestionar la creación y modificación de usuarios	2024-10-18 18:53:36.839197
2	1	Autenticación de Usuarios	Caso de uso para el inicio de sesión y autenticación	2024-10-18 18:53:36.839197
3	2	Catálogo de Productos	Caso de uso para gestionar los productos del catálogo	2024-10-18 18:53:36.839197
4	2	Proceso de Compra	Caso de uso para gestionar el proceso de compra de los usuarios	2024-10-18 18:53:36.839197
\.


--
-- TOC entry 4905 (class 0 OID 16471)
-- Dependencies: 226
-- Data for Name: defectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.defectos (id, id_caso_prueba, descripcion, estado, prioridad, creado_por, asignado_a, fecha_creacion, fecha_actualizacion) FROM stdin;
1	2	El sistema permite login con contraseña vacía	abierto	alta	1	2	2024-10-18 18:54:19.544924	2024-10-18 18:54:19.544924
2	3	Error al agregar producto con nombre largo	en progreso	media	2	2	2024-10-18 18:54:19.544924	2024-10-18 18:54:19.544924
3	4	El botón de pagar no responde	abierto	alta	1	\N	2024-10-18 18:54:19.544924	2024-10-18 18:54:19.544924
\.


--
-- TOC entry 4899 (class 0 OID 16420)
-- Dependencies: 220
-- Data for Name: proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proyectos (id, nombre, descripcion, fecha_inicio, fecha_fin, estado, creado_por, fecha_creacion) FROM stdin;
1	Sistema de Gestión de Calidad	Proyecto para gestionar la calidad de software	2024-10-01	2024-12-31	en progreso	3	2024-10-18 18:53:25.905827
2	Plataforma E-Commerce	Desarrollo de una plataforma de comercio electrónico	2024-08-01	2024-11-15	en progreso	3	2024-10-18 18:53:25.905827
11	Implementación de CRM	Implementación de un sistema CRM para mejorar la gestión de clientes	2024-09-15	2025-02-28	abierto	2	2024-10-18 22:40:58.189593
12	Migración a la Nube	Migración de los servicios internos a una infraestructura basada en la nube	2024-07-01	2024-10-15	resuelto	3	2024-10-18 22:40:58.189593
14	Automatización de Procesos Internos	Automatización de tareas administrativas y operativas para mejorar la eficiencia	2024-06-01	2024-09-01	cerrado	3	2024-10-18 22:40:58.189593
15	Capacitación de Personal	Programa de capacitación para el nuevo personal contratado	2024-05-01	2024-06-30	cerrado	2	2024-10-18 22:40:58.189593
17	Sistema de Gestión Documental	Proyecto para la implementación de un sistema de gestión documental digital	2024-07-15	2024-10-15	cerrado	2	2024-10-18 22:40:58.189593
13	Rediseño de la Página Web Corporativa	Proyecto para rediseñar y mejorar la experiencia de usuario en el sitio web	2024-08-10	2024-11-30	en progreso	1	2024-10-18 22:40:58.189593
16	Implementación de ERP	Desarrollo e implementación de un sistema ERP para la gestión empresarial	2024-09-01	2025-01-15	en progreso	1	2024-10-18 22:40:58.189593
18	Desarrollo de Plataforma de Telemedicina	Desarrollo de una plataforma para ofrecer servicios de telemedicina	2024-06-01	2024-12-31	en progreso	2	2024-10-18 22:40:58.189593
\.


--
-- TOC entry 4897 (class 0 OID 16405)
-- Dependencies: 218
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, nombre_usuario, correo_electronico, contrasena, rol, fecha_creacion, nombre, apellido) FROM stdin;
1	german_tester	german@correo.com	contra123	tester	2024-10-18 18:53:04.266065	german	castellanos
2	ana_dev	ana@example.com	password123	desarrollador	2024-10-18 18:53:04.266065	ana	perez
3	maria_admin	maria@example.com	password123	admin	2024-10-18 18:53:04.266065	maria	lopez
\.


--
-- TOC entry 4916 (class 0 OID 0)
-- Dependencies: 223
-- Name: casos_prueba_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.casos_prueba_id_seq', 4, true);


--
-- TOC entry 4917 (class 0 OID 0)
-- Dependencies: 221
-- Name: casos_uso_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.casos_uso_id_seq', 4, true);


--
-- TOC entry 4918 (class 0 OID 0)
-- Dependencies: 225
-- Name: defectos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.defectos_id_seq', 3, true);


--
-- TOC entry 4919 (class 0 OID 0)
-- Dependencies: 219
-- Name: proyectos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proyectos_id_seq', 18, true);


--
-- TOC entry 4920 (class 0 OID 0)
-- Dependencies: 217
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);


--
-- TOC entry 4741 (class 2606 OID 16459)
-- Name: casos_prueba casos_prueba_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.casos_prueba
    ADD CONSTRAINT casos_prueba_pkey PRIMARY KEY (id);


--
-- TOC entry 4739 (class 2606 OID 16444)
-- Name: casos_uso casos_uso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.casos_uso
    ADD CONSTRAINT casos_uso_pkey PRIMARY KEY (id);


--
-- TOC entry 4743 (class 2606 OID 16482)
-- Name: defectos defectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT defectos_pkey PRIMARY KEY (id);


--
-- TOC entry 4737 (class 2606 OID 16429)
-- Name: proyectos proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_pkey PRIMARY KEY (id);


--
-- TOC entry 4731 (class 2606 OID 16418)
-- Name: usuarios usuarios_correo_electronico_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_correo_electronico_key UNIQUE (correo_electronico);


--
-- TOC entry 4733 (class 2606 OID 16416)
-- Name: usuarios usuarios_nombre_usuario_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_nombre_usuario_key UNIQUE (nombre_usuario);


--
-- TOC entry 4735 (class 2606 OID 16414)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 4746 (class 2606 OID 16465)
-- Name: casos_prueba casos_prueba_creado_por_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.casos_prueba
    ADD CONSTRAINT casos_prueba_creado_por_fkey FOREIGN KEY (creado_por) REFERENCES public.usuarios(id) ON DELETE SET NULL;


--
-- TOC entry 4747 (class 2606 OID 16460)
-- Name: casos_prueba casos_prueba_id_caso_uso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.casos_prueba
    ADD CONSTRAINT casos_prueba_id_caso_uso_fkey FOREIGN KEY (id_caso_uso) REFERENCES public.casos_uso(id) ON DELETE CASCADE;


--
-- TOC entry 4745 (class 2606 OID 16445)
-- Name: casos_uso casos_uso_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.casos_uso
    ADD CONSTRAINT casos_uso_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id) ON DELETE CASCADE;


--
-- TOC entry 4748 (class 2606 OID 16493)
-- Name: defectos defectos_asignado_a_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT defectos_asignado_a_fkey FOREIGN KEY (asignado_a) REFERENCES public.usuarios(id) ON DELETE SET NULL;


--
-- TOC entry 4749 (class 2606 OID 16488)
-- Name: defectos defectos_creado_por_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT defectos_creado_por_fkey FOREIGN KEY (creado_por) REFERENCES public.usuarios(id) ON DELETE SET NULL;


--
-- TOC entry 4750 (class 2606 OID 16483)
-- Name: defectos defectos_id_caso_prueba_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT defectos_id_caso_prueba_fkey FOREIGN KEY (id_caso_prueba) REFERENCES public.casos_prueba(id) ON DELETE CASCADE;


--
-- TOC entry 4744 (class 2606 OID 16430)
-- Name: proyectos proyectos_creado_por_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_creado_por_fkey FOREIGN KEY (creado_por) REFERENCES public.usuarios(id) ON DELETE SET NULL;


-- Completed on 2024-10-19 00:41:19

--
-- PostgreSQL database dump complete
--

