CREATE DATABASE "nestjs" WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION
LIMIT = -1 IS_TEMPLATE = False;


DROP SCHEMA IF EXISTS "public";


CREATE SCHEMA IF NOT EXISTS "public";


DROP TABLE IF EXISTS "public"."Student";


CREATE TABLE IF NOT EXISTS "public"."Student" ("id" serial PRIMARY KEY,
                                                                   "name" character varying (20) NOT NULL,
                                                                                                 "age" integer NOT NULL);


DROP TABLE IF EXISTS "public"."Teacher";


CREATE TABLE IF NOT EXISTS "public"."Teacher" ("id" serial PRIMARY KEY,
                                                                   "name" character varying(20) NOT NULL,
                                                                                                "subject" character varying(20) NOT NULL);

