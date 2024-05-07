# Real-Time Alert Dashboard Simulator

The Real-Time Alert Dashboard is a web application built using React, TypeScript, and Chakra UI for the client and utilizes socket.io for WebSockets. It demonstrates the implementation of real-time communication with WebSocket via socket.io, enabling users to receive and manage alerts instantly. The application is designed with a focus on real-time functionality, leveraging React 18's features for a responsive and efficient user experience. Currently, it utilizes a context-based state management approach to handle application state. Plans to incorporate client-side routing with React Router for enhanced navigation are underway. The use of Chakra UI ensures an accessible and modern interface, facilitating user interaction with the alert system.

TODOs:

- [ ] fill out readme later with the set up instructions and other details
- [x] react routing to separate form and active alerts
- [ ] put the select options in a util component to import for sharing.
- [ ] create a custom styled components layer to improve maintainability in case of ui changes.

less important things

- [ ] make it so bell only shows if user has unseen alerts.
- [ ] make icon wiggle.
- [ ] add a hover over icon to tell people what it means.
- [ ] add a toast letting user know about the alerts.
- this will require some updates to state management. i think adding a seen attribute to an alert would be an easy way to address it. then when a new alert is added i have an unseenAlerts state turn tot true and false when they visit the alerts page. would need to make onclick on the link to and useNavigate hook to navigate instead of to='/alerts'
-
