DROP TABLE IF EXISTS "public"."Student";


CREATE TABLE IF NOT EXISTS "public"."Student" ("Id" serial PRIMARY KEY,
                                                                   "Name" character varying (20) NOT NULL,
                                                                                                 "Age" integer NOT NULL);


DROP TABLE IF EXISTS "public"."Teacher";


CREATE TABLE IF NOT EXISTS "public"."Teacher" ("Id" serial PRIMARY KEY,
                                                                   "Name" character varying(20) NOT NULL,
                                                                                                "Subject" character varying(20) NOT NULL);