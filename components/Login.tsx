import {Button, Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
import {FunctionComponent} from "react";
import styles from "./Login.module.sass"

const login: FunctionComponent = () => {
    return (
        <>
            <Typography gutterBottom variant={'h3'} component={'div'}>
                Hold on, traveller
            </Typography>
            <Typography gutterBottom variant={'h5'} component={'div'}>
                identify yourself!
            </Typography>
            <Card className={styles["login-box"]} variant={'outlined'}>
                <CardContent className={styles["login-form"]}>
                    <div className={styles['form-group']}>
                        <TextField id={'name'} label={'E-Mail'} variant={'outlined'}/>
                    </div>
                    <div className={styles['form-group']}>
                        <TextField type={"password"} id={'password'} label={'Password'} variant={'outlined'}/>
                    </div>
                </CardContent>
                <CardActions>
                    <Button>Sign In</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default login
