import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  List,
} from "@mui/material";
import { tokens } from "../../theme";
import { Box } from "@mui/system";
import Header from "../../components/Header";
import { formatDate } from "@fullcalendar/core";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    console.log(selected);
    const title = prompt("Please enter a new title for your event");

    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    // Created new event
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {};

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interative Page" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          borderRadius="4px"
          p="25px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
        {/* Calendar */}

        <Box flex="1 1 100% " ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev next today",
              center: "title",
              right: "dayGridMonth timeGridWeek timeGridDay listMonth",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-Day Event", date: "2023-02-14" },
              { id: "1234", title: "Timed Event", date: "2023-02-28" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
