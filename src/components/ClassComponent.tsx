import React from "react";
import { Box, Card, withStyles, WithStyles, createStyles, Typography, CardContent } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

interface Person {
    name: string;
    position: string;
    img:string
}

interface ClassComponentProps {
    employee: Person[];
    title: string;
    classes: {
        container: string;
    };
}

const styles = (theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingBottom: "50px",
            paddingTop:"50px",
            marginTop:"100px",
            borderRight:"4px solid black",
            borderSpacing:"20px",
            marginLeft:"100px",
            marginRight:"100px",
            boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
        heading: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '56px',
            letterSpacing: '0px',
            textAlign: 'center',
            color: '#34373A',
            marginBottom: '20px',
            paddingTop:"20px"
        },
        parentContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            height: '100%',
            margin: '-10px',
            marginTop:"10px",
        },
        card: {
            backgroundColor: '#43D270',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100px',
            height: '100px',
            padding: '20px',
            margin: '50px',
            borderRadius: '2rem',
        },
        cardHeading: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '24px',
            letterSpacing: '0px',
            textAlign: 'center',
          },
          subHeading: {
            fontFamily: 'Lato, sans-serif',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '0px',
            textAlign: 'center',
          },
          image:{
            height:"150px",
            borderRadius: '2rem',

          },
          [`@media (max-width: 768px)`]: {
            parentContainer: {
              flexDirection: 'column',
            },
        },
    });

class ClassComponent extends React.Component<ClassComponentProps & WithStyles<typeof styles>> {
    render() {
        const { employee, title, classes } = this.props;
        return (
            <Box className={classes.container}>
                <Typography variant="h4" className={classes.heading}>{title}</Typography>
                <Box className={classes.parentContainer}>
                    {employee.map((person) => (
                        <div key={person.name}>
                            <Card className={classes.card}>
                                <CardContent>
                                <img src={person.img} alt={person.name} className={classes.image} />
                                </CardContent>
                            </Card>
                            <Typography className={classes.cardHeading}>{person.name}</Typography>
                            <Typography className={classes.subHeading}>{person.position}</Typography>
                        </div>
                    ))}
                </Box>
            </Box>
        )
    }
}

export default withStyles(styles)(ClassComponent);