import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from '../libs/calenderevents';

const localizer = momentLocalizer(moment);

const Bigcalender = (props) => {
  return (
    <div className="w-full h-full bg-slate-800 text-white">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        className="text-white"
      />
      <style jsx global>{`
        .rbc-toolbar {
          background-color: #1e293b; /* Tailwind's slate-800 */
          color: white;
        }
        .rbc-toolbar button {
          color: white;
        }
       .rbc-event{
             background-color:green;
             color:white;
             font-weight:700;

       }
             .rbc-event-content{
             background:green;
             }
             .rbc-time-slot {
          background-color: black; /* Base slate-800 for remaining time slots */
        }
          .rbc-show-more{
          color:white;
          background-color:red;
          margin-top:10px;
          }
          .rbc-off-range-bg{
          background-color:red;
          
          
          }
           .rbc-date-cell{
          color:white;
          }
        .rbc-month-view, .rbc-time-view {
          background-color: #1e293b; /* Tailwind's slate-800 */
          
        }
        .rbc-header {
          background-color: #2d3748; /* Tailwind's slate-700 */
          color: white;
        }
        .rbc-today {
          background-color: #374151 !important; /* Tailwind's slate-600 */
        }
      `}</style>
    </div>
  );
};

export default Bigcalender;
