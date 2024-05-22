# Real-Time Alert Dashboard Simulator
<!--###
The Real-Time Alert Dashboard is a web application built using React, TypeScript, and Chakra UI for the client and utilizes socket.io for WebSockets. It demonstrates the implementation of real-time communication with WebSocket via socket.io, enabling users to receive and manage alerts instantly. The application is designed with a focus on real-time functionality, leveraging React 18's features for a responsive and efficient user experience. Currently, it utilizes a context-based state management approach to handle application state. Plans to incorporate client-side routing with React Router for enhanced navigation are underway. The use of Chakra UI ensures an accessible and modern interface, facilitating user interaction with the alert system.
-->

Emulate a live alert dashboard with this React-based web application. Built for developers who want to explore real-time communication, state management, and accessible UI design.

## Key Features

**Instant Alerts:** Leverages WebSockets (via socket.io) for seamless alert delivery and real-time updates.

**Modern Tech Stack:** React 18, TypeScript, Chakra UI provide a foundation for a robust and maintainable codebase.

**Efficient State Management:** Currently uses a context-based approach, with plans for further optimization.

**Accessible Design:** Chakra UI ensures your dashboard is usable by everyone.

**Developer-Friendly:** Includes clear documentation to help you understand and customize the project.

TODOs:

- [x] React Router integration for smoother navigation and a more organized codebase.
- [ ] Component Reusability: Centralized select options and a custom styled-component layer to improve maintainability.
- [ ] User Experience Polish: Unread alert indicators, icon animations, tooltips, and toast notifications for a more refined interface.

## Getting Started

#### Clone: git clone the [repo](https://github.com/acasarsa/alert-system)
#### Install: `npm install`
#### Run: `npm start`
#### Open in Two Windows: To see the real-time updates, launch the app in two separate browser windows or tabs.
#### Trigger and Observe: In one window, create a new alert. Watch as it instantly appears in the other window's dashboard!

## Exploring the Codebase

`/components`: Contains reusable UI elements.
`/context`: Manages the application's state.
`/utils`: Helper functions for shared logic.
<!--### 
less important things

- [ ] make it so bell only shows if user has unseen alerts.
- [ ] make icon wiggle.
- [ ] add a hover over icon to tell people what it means.
- [ ] add a toast letting user know about the alerts.
- this will require some updates to state management. i think adding a seen attribute to an alert would be an easy way to address it. then when a new alert is added i have an unseenAlerts state turn tot true and false when they visit the alerts page. would need to make onclick on the link to and useNavigate hook to navigate instead of to='/alerts' 
--> 

## Contributing

Contributions welcome! Please open an issue to discuss any bugs, features, or improvements.

## License

This project is licensed under the MIT License – see the LICENSE.md file for details.
