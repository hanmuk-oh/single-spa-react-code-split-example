import { lazy } from 'react';
const Timeline = lazy(() => import( /* webpackChunkName: "assets/mui" */ "@mui/lab/Timeline"));
const TimelineItem = lazy(() => import( /* webpackChunkName: "assets/mui" */ "@mui/lab/TimelineItem"));
const TimelineSeparator = lazy(() => import( /* webpackChunkName: "assets/mui" */ "@mui/lab/TimelineSeparator"));
const TimelineConnector = lazy(() => import( /* webpackChunkName: "assets/mui" */ "@mui/lab/TimelineConnector"));
const TimelineContent = lazy(() => import( /* webpackChunkName: "assets/mui" */ "@mui/lab/TimelineContent"));
const TimelineDot = lazy(() => import( /* webpackChunkName: "assets/mui" */ "@mui/lab/TimelineDot"));

export default function AlternateTimeline(props) {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}
