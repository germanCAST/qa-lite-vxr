PGDMP  
    5            	    |            gestion_pruebas    17.0    17.0 3    /           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            0           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            1           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            2           1262    16461    gestion_pruebas    DATABASE     �   CREATE DATABASE gestion_pruebas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE gestion_pruebas;
                     postgres    false            �            1259    16462    casos_prueba    TABLE     .  CREATE TABLE public.casos_prueba (
    id integer NOT NULL,
    id_caso_uso integer,
    titulo character varying(255),
    descripcion text,
    estado character varying(50),
    fecha_ejecucion date,
    creado_por integer,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.casos_prueba;
       public         heap r       postgres    false            �            1259    16468    casos_prueba_id_seq    SEQUENCE     �   CREATE SEQUENCE public.casos_prueba_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.casos_prueba_id_seq;
       public               postgres    false    217            3           0    0    casos_prueba_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.casos_prueba_id_seq OWNED BY public.casos_prueba.id;
          public               postgres    false    218            �            1259    16469 	   casos_uso    TABLE     �   CREATE TABLE public.casos_uso (
    id integer NOT NULL,
    id_proyecto integer,
    titulo character varying(255) NOT NULL,
    descripcion text,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.casos_uso;
       public         heap r       postgres    false            �            1259    16475    casos_uso_id_seq    SEQUENCE     �   CREATE SEQUENCE public.casos_uso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.casos_uso_id_seq;
       public               postgres    false    219            4           0    0    casos_uso_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.casos_uso_id_seq OWNED BY public.casos_uso.id;
          public               postgres    false    220            �            1259    16476    defectos    TABLE     �  CREATE TABLE public.defectos (
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
    DROP TABLE public.defectos;
       public         heap r       postgres    false            �            1259    16485    defectos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.defectos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.defectos_id_seq;
       public               postgres    false    221            5           0    0    defectos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.defectos_id_seq OWNED BY public.defectos.id;
          public               postgres    false    222            �            1259    16486 	   proyectos    TABLE     U  CREATE TABLE public.proyectos (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion text,
    fecha_inicio date,
    fecha_fin date,
    estado character varying(50) DEFAULT 'en_progreso'::character varying,
    creado_por integer,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.proyectos;
       public         heap r       postgres    false            �            1259    16493    proyectos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.proyectos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.proyectos_id_seq;
       public               postgres    false    223            6           0    0    proyectos_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.proyectos_id_seq OWNED BY public.proyectos.id;
          public               postgres    false    224            �            1259    16494    usuarios    TABLE     �  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre_usuario character varying(255) NOT NULL,
    correo_electronico character varying(255) NOT NULL,
    contrasena character varying(255) NOT NULL,
    rol character varying(50) DEFAULT 'tester'::character varying,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    nombre character varying(255),
    apellido character varying(255)
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false            �            1259    16501    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public               postgres    false    225            7           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public               postgres    false    226            k           2604    16502    casos_prueba id    DEFAULT     r   ALTER TABLE ONLY public.casos_prueba ALTER COLUMN id SET DEFAULT nextval('public.casos_prueba_id_seq'::regclass);
 >   ALTER TABLE public.casos_prueba ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217            m           2604    16503    casos_uso id    DEFAULT     l   ALTER TABLE ONLY public.casos_uso ALTER COLUMN id SET DEFAULT nextval('public.casos_uso_id_seq'::regclass);
 ;   ALTER TABLE public.casos_uso ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219            o           2604    16504    defectos id    DEFAULT     j   ALTER TABLE ONLY public.defectos ALTER COLUMN id SET DEFAULT nextval('public.defectos_id_seq'::regclass);
 :   ALTER TABLE public.defectos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    222    221            t           2604    16505    proyectos id    DEFAULT     l   ALTER TABLE ONLY public.proyectos ALTER COLUMN id SET DEFAULT nextval('public.proyectos_id_seq'::regclass);
 ;   ALTER TABLE public.proyectos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223            w           2604    16506    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    226    225            #          0    16462    casos_prueba 
   TABLE DATA           �   COPY public.casos_prueba (id, id_caso_uso, titulo, descripcion, estado, fecha_ejecucion, creado_por, fecha_creacion) FROM stdin;
    public               postgres    false    217   �A       %          0    16469 	   casos_uso 
   TABLE DATA           Y   COPY public.casos_uso (id, id_proyecto, titulo, descripcion, fecha_creacion) FROM stdin;
    public               postgres    false    219   �B       '          0    16476    defectos 
   TABLE DATA           �   COPY public.defectos (id, id_caso_prueba, descripcion, estado, prioridad, creado_por, asignado_a, fecha_creacion, fecha_actualizacion) FROM stdin;
    public               postgres    false    221   �C       )          0    16486 	   proyectos 
   TABLE DATA           y   COPY public.proyectos (id, nombre, descripcion, fecha_inicio, fecha_fin, estado, creado_por, fecha_creacion) FROM stdin;
    public               postgres    false    223   vD       +          0    16494    usuarios 
   TABLE DATA           }   COPY public.usuarios (id, nombre_usuario, correo_electronico, contrasena, rol, fecha_creacion, nombre, apellido) FROM stdin;
    public               postgres    false    225   3H       8           0    0    casos_prueba_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.casos_prueba_id_seq', 6, true);
          public               postgres    false    218            9           0    0    casos_uso_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.casos_uso_id_seq', 5, true);
          public               postgres    false    220            :           0    0    defectos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.defectos_id_seq', 3, true);
          public               postgres    false    222            ;           0    0    proyectos_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.proyectos_id_seq', 31, true);
          public               postgres    false    224            <           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);
          public               postgres    false    226            {           2606    16508    casos_prueba casos_prueba_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.casos_prueba
    ADD CONSTRAINT casos_prueba_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.casos_prueba DROP CONSTRAINT casos_prueba_pkey;
       public                 postgres    false    217            }           2606    16510    casos_uso casos_uso_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.casos_uso
    ADD CONSTRAINT casos_uso_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.casos_uso DROP CONSTRAINT casos_uso_pkey;
       public                 postgres    false    219                       2606    16512    defectos defectos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT defectos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.defectos DROP CONSTRAINT defectos_pkey;
       public                 postgres    false    221            �           2606    16514    proyectos proyectos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.proyectos DROP CONSTRAINT proyectos_pkey;
       public                 postgres    false    223            �           2606    16516 (   usuarios usuarios_correo_electronico_key 
   CONSTRAINT     q   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_correo_electronico_key UNIQUE (correo_electronico);
 R   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_correo_electronico_key;
       public                 postgres    false    225            �           2606    16518 $   usuarios usuarios_nombre_usuario_key 
   CONSTRAINT     i   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_nombre_usuario_key UNIQUE (nombre_usuario);
 N   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_nombre_usuario_key;
       public                 postgres    false    225            �           2606    16520    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public                 postgres    false    225            �           2606    16521 )   casos_prueba casos_prueba_creado_por_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.casos_prueba
    ADD CONSTRAINT casos_prueba_creado_por_fkey FOREIGN KEY (creado_por) REFERENCES public.usuarios(id) ON DELETE SET NULL;
 S   ALTER TABLE ONLY public.casos_prueba DROP CONSTRAINT casos_prueba_creado_por_fkey;
       public               postgres    false    217    4743    225            �           2606    16526 *   casos_prueba casos_prueba_id_caso_uso_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.casos_prueba
    ADD CONSTRAINT casos_prueba_id_caso_uso_fkey FOREIGN KEY (id_caso_uso) REFERENCES public.casos_uso(id) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.casos_prueba DROP CONSTRAINT casos_prueba_id_caso_uso_fkey;
       public               postgres    false    4733    217    219            �           2606    16531 $   casos_uso casos_uso_id_proyecto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.casos_uso
    ADD CONSTRAINT casos_uso_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id) ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.casos_uso DROP CONSTRAINT casos_uso_id_proyecto_fkey;
       public               postgres    false    219    4737    223            �           2606    16536 !   defectos defectos_asignado_a_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT defectos_asignado_a_fkey FOREIGN KEY (asignado_a) REFERENCES public.usuarios(id) ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.defectos DROP CONSTRAINT defectos_asignado_a_fkey;
       public               postgres    false    4743    221    225            �           2606    16541 !   defectos defectos_creado_por_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT defectos_creado_por_fkey FOREIGN KEY (creado_por) REFERENCES public.usuarios(id) ON DELETE SET NULL;
 K   ALTER TABLE ONLY public.defectos DROP CONSTRAINT defectos_creado_por_fkey;
       public               postgres    false    4743    225    221            �           2606    16546 %   defectos defectos_id_caso_prueba_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT defectos_id_caso_prueba_fkey FOREIGN KEY (id_caso_prueba) REFERENCES public.casos_prueba(id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.defectos DROP CONSTRAINT defectos_id_caso_prueba_fkey;
       public               postgres    false    221    4731    217            �           2606    16566    defectos fk_caso_prueba    FK CONSTRAINT     �   ALTER TABLE ONLY public.defectos
    ADD CONSTRAINT fk_caso_prueba FOREIGN KEY (id_caso_prueba) REFERENCES public.casos_prueba(id) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.defectos DROP CONSTRAINT fk_caso_prueba;
       public               postgres    false    4731    217    221            �           2606    16561    casos_prueba fk_caso_uso    FK CONSTRAINT     �   ALTER TABLE ONLY public.casos_prueba
    ADD CONSTRAINT fk_caso_uso FOREIGN KEY (id_caso_uso) REFERENCES public.casos_uso(id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.casos_prueba DROP CONSTRAINT fk_caso_uso;
       public               postgres    false    219    217    4733            �           2606    16556    casos_uso fk_proyecto    FK CONSTRAINT     �   ALTER TABLE ONLY public.casos_uso
    ADD CONSTRAINT fk_proyecto FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id) ON DELETE CASCADE;
 ?   ALTER TABLE ONLY public.casos_uso DROP CONSTRAINT fk_proyecto;
       public               postgres    false    4737    219    223            �           2606    16551 #   proyectos proyectos_creado_por_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_creado_por_fkey FOREIGN KEY (creado_por) REFERENCES public.usuarios(id) ON DELETE SET NULL;
 M   ALTER TABLE ONLY public.proyectos DROP CONSTRAINT proyectos_creado_por_fkey;
       public               postgres    false    225    223    4743            #   �   x�}�=R�0Fk�{�d,�N�tL*f(R@G�؋G�#��D�m8G��X���R��>��j��:�v�ܤ ����]P;��0 #|�W�H�=d��$���&0S�pO>��)#��-l93ŬX*{~�L���M�����+��8=��yayx����G�_Jԃ�hK������b
Qv��x۪�����X�R�j��|(�sQ#����ӓt3d�;&�ݧL�{�p#"7�V�\�ZC���z�k� �a�m      %   �   x�}�An� E�p���#����.r�Mv�L���X�89C����Z(JU		4z�73�	v�A��(T�����D���F$�b�z=���2�J��/��&k��D]�D7����6]Ӌ~ϷL���J����<�{����3���
�2��&K	���a��#��}���엨�_���V01�5��z��x�vy�Q���Y��Iy����n]&J˲������7�~�      '   �   x���1�@k�
 ���i�:	��\�Q����)RPl���]n�~�<.������>`/����ۛ�I��"�γF�"��ln]j��Th��t���ҹں?Vb����(҄4*�����>��2w��!8�[f<����񺓸}�� ��/�=��/��,I�/�a       )   �  x��U˒�6]�W���x��t�LMUz��$�,f#��� J�NM~+��ˑ��O�2��t�=��+�y���h/�?����e�=��k��ZA�ۘ�%��h�'לԜ�Do\�h:m����XĒ ���)~�z�%�V'D)��14
hN+��H���t�4_�A�}�?*��X�*,�J���7�C�I7;��E)4�~���@��c��Mp��1�����e��S�F�R܇��R�8	�kQe�&0��>w4/Ҹ`i��Ҝm|J�~xy^�^h����F|U��+m-�Z���7�jx�F�Y�r����G�%�'���]�-�P��f���WʒWjف�����[㙞h-+K�-5	�y��S�2�Y��T�s�� ��(��Af�HԬ[|p'�l���= �:�W�@\���FV6�|ѭ|�]�'\iP�n0��U_���*qCO>N��� õ��[5�����r+���yq+�8�Zі�m/�]��і���7���M���l�GU�v��?+}���V�/��J���L��d�3�g���z���%w��:��������A�j%�D�@AF�!�퇅��<�^2+V�i�fi�EFqpjT����w����鶠i�gQ�0-��j焄c�M �EnW���a�$�z�I���l�fS���y��iF�<��.��ݫ�O���>�ӄ�
v�PD;�WXh:�1�Z�_�C���͂8��#i;�����S��(�n�qV��p�%I��t�#�@�<�xu���(��^�!6�WG�'�z��R�x�0��K�_8	�O���/�S�l:�Jj�	�w3�r��= ;p.�p�3}�������RBi�ea���G	Z�d��������a�2�<�C-�Ct���sA�ºڽ� �d�3J�y�A�Ϙ�8��n��,<r����(����_B�����ʷ      +   �   x�}�I
�0 ��+���Y9�!� bQ�e�Ж���rmN�`fd�I0N+���3��3�9���6p"V۶2�2��c׌��m��;m����c�,`���k�w�`H��p�,nK;�(��q|��D ��W5P�Ѕ%����\dw<�~�J��4U     