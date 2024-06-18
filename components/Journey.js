import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { IoIosBook } from 'react-icons/io';
import { AiFillCode } from 'react-icons/ai';
import { BsBank2 } from 'react-icons/bs';
import { FaStar } from "react-icons/fa";
import Divider from '@mui/material/Divider';
import styles from '../styles/Home.module.css';

const Journey = () => (
    <>
        <Timeline
            position='right'
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            <Divider textAlign='left'>
                <h1 className={styles.siteHeader}>Journey</h1>
            </Divider>
            <TimelineNode
                logo={<IoIosBook />}
                date='2013 - 2017'
                headerText='Nanyang Technological University'
                bodyText='Graduated with a Double Degree in Computer Science and Business.'
            />
            <TimelineNode
                logo={<AiFillCode />}
                date='2017 - 2021'
                headerText='CrimsonLogic'
                bodyText='My first foray into the world of software development as a professional.
                Had a hand in various projects as part of the graduate rotation program.
                Learning the ins and outs of coding as well as mentoring fresh grad juniors.'
            />
            <TimelineNode
                logo={<BsBank2 />}
                date='2021 - 2023'
                headerText='Credit Suisse'
                bodyText='Working in a multi-national company with global and regional requirements and systems, where there is a 
                need to interact and liaise with international teams and a complex suite of microservices.'
            />
            <TimelineNode
                logo={<FaStar />}
                date='2023 - Now'
                headerText='A*STAR'
                bodyText='Developing along side scientists and researchers, utilizing new technologies to upgrade Singapore towards an innovation-driven economy'
            />
        </Timeline>
    </>
);

export default Journey;

const TimelineNode = (props) => (
    <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align='right'
            color={props.dateColor}
        >
            {props.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector
                sx={{ bgcolor: props.topConnectorColor || '#0058dd' }}
            />
            <TimelineDot
                color={props.dotColor || 'primary'}
                variant={props.dotVariant}
            >
                {props.logo}
            </TimelineDot>
            <TimelineConnector
                sx={{ bgcolor: props.botConnectorColor || '#0058dd' }}
            />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography
                variant='h6'
                component='span'
                color={props.headerColor || '#0058dd'}
            >
                {props.headerText}
            </Typography>
            <Typography>{props.bodyText}</Typography>
        </TimelineContent>
    </TimelineItem>
);
