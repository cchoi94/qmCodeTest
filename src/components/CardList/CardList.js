import React from 'react';
import classes from './CardList.css'

import Moment from 'moment';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const CardList = (props) => {
   
    let cardData = props.info.map((el, index) => {
        return (
                <li className={classes.CardContainer}
                    key={index}>
                    <Card className={classes.Card}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary 
                                className={classes.CardSummary}
                                expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6" gutterBottom>
                                    {el.text}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails
                                classes={{root: classes.ExpansionPanelDetails}}>
                                <Typography variant="subtitle2">
                                    <div className={classes.ExpandContainer}>
                                        <div className={classes.ExpandCreatorBox}>
                                            <p>Created by:<br/>{el.creator.name}</p>
                                            <img src={`${props.imgPrefix}${el.creator.image}`} alt="Creator"/>
                                        </div>
                                        <div className={classes.ExpandInfoBox}>
                                            <Typography variant="subtitle2">
                                                <p>Due:</p>
                                                <Typography variant="caption">
                                                    <strong>
                                                        {Moment(el.startDate).format('MMMM Do YYYY')}
                                                    </strong>
                                                </Typography>
                                            </Typography>
                                            <ul>
                                                <label>Assignees:</label>
                                                {el.assignees.map((result, index) => {
                                                    return (
                                                        <li className={classes.AssigneeContainer} key={index}>
                                                            <img src={`${props.imgPrefix}${result.image}`} alt="Assignee"/>
                                                            <Typography variant="caption" gutterBottom>
                                                                {result.full_name}
                                                            </Typography>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Card>
                    <Checkbox
                        className={classes.Checkbox}
                        color="primary"
                        onClick={() => props.boxClick(el.completed, index)}
                        checked = {el.completed}
                    />
                </li>
            )
        })

    return (
        <ul>
            {cardData}
        </ul>
    )
}



export default CardList
