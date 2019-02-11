DROP DATABASE IF EXISTS wonder_todo_dev;

DROP ROLE IF EXISTS wonder_todo_dev_role;

CREATE ROLE wonder_todo_dev_role;

CREATE DATABASE wonder_todo_dev OWNER wonder_todo_dev_role;

\c wonder_todo_dev;

CREATE TABLE groups (
  group_id serial PRIMARY KEY,
  group_name varchar(50) NOT NULL,
  created_at timestamp with time zone NOT NULL default now(),
  updated_at timestamp with time zone NOT NULL default now(),
  archived_at timestamp with time zone default NULL
);

CREATE TABLE tasks (
  task_id serial PRIMARY KEY,
  task_name varchar(120) NOT NULL,
  is_locked boolean DEFAULT false,
  group_id integer REFERENCES groups(group_id),
  created_at timestamp with time zone NOT NULL default now(),
  updated_at timestamp with time zone NOT NULL default now(),
  archived_at timestamp with time zone default NULL
);

CREATE TABLE task_dependencies (
  dependency_id serial PRIMARY KEY,
  task_id integer REFERENCES tasks(task_id),
  depends_on_task_id integer REFERENCES tasks(task_id),
  created_at timestamp with time zone NOT NULL default now(),
  updated_at timestamp with time zone NOT NULL default now(),
  archived_at timestamp with time zone default NULL
);

CREATE TABLE groups_tasks (
  group_task_id serial PRIMARY KEY,
  group_id integer REFERENCES groups(group_id),
  task_id integer REFERENCES tasks(task_id),
  created_at timestamp with time zone NOT NULL default now(),
  updated_at timestamp with time zone NOT NULL default now(),
  archived_at timestamp with time zone default NULL
);