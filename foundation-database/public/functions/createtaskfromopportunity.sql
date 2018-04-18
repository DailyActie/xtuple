CREATE OR REPLACE FUNCTION createTaskFromOpportunity(pOpheadId INTEGER, pTaskName TEXT)
RETURNS INTEGER AS $$
-- Copyright (c) 1999-2018 by OpenMFG LLC, d/b/a xTuple. 
-- See www.xtuple.com/CPAL for the full text of the software license.
DECLARE
  taskid   INTEGER;
BEGIN
  taskid := (SELECT createtask('OPP'::TEXT, pOpheadId::TEXT, pTaskName, 'N'::TEXT, true, pTaskName, pTaskName,
                   (SELECT incdtpriority_id FROM incdtpriority WHERE incdtpriority_default)::TEXT,
                   ophead_owner_username,
                   ('{"assigned": [{"role": "primary", "username": "'||ophead_username||'","assigned_date":"'||current_date||'"}]}')::json,
                   0, 0, 0, 0, 0,
                   ophead_target_date,
                   COALESCE(ophead_start_date, current_date),
                   NULL::DATE, ophead_notes)
            FROM ophead
            WHERE ophead_id=pOpheadId);

  IF (taskid IS NULL) THEN
    RAISE EXCEPTION 'There was an error creating the task [xtuple: createTaskFromOpportunity, -1]';
  END IF;  

  RETURN taskid;
END;
$$ LANGUAGE 'plpgsql';
