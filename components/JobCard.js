import React from 'react';
import { Card, CardItem, Body, Text, Button } from 'native-base';

function JobCard(props) {
    return (
        <Card pointerEvents='none'>
            <CardItem header bordered>
                <Text style={{ fontSize: 20 }} numberOfLines={2}>{props.job.title}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text numberOfLines={2}>
                        {props.job.desciption}
                    </Text>
                </Body>
            </CardItem>
            <CardItem footer bordered>
                {props.job.tags.map((tag, index) => {
                    return (
                        <Button rounded success key={index} style={{ marginLeft: 5, height: 40 }}>
                            <Text style={{ fontSize: 14 }} numberOfLines={1}>{tag}</Text>
                        </Button>
                    );
                })}
            </CardItem>
        </Card>
    );
}

export default JobCard;