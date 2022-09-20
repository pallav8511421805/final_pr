import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack'
import { resetalertaction } from '../../redux/actions/alert.action';

function Alert(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    let alertdata = useSelector(state => state.alert);
    let dispatch = useDispatch();

    useEffect(() => {
        if (alertdata.text !== '') {
            enqueueSnackbar(alertdata.text, {
                variant: alertdata.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            });
            setTimeout(() => { dispatch(resetalertaction) }, 2000)
        }
    }, [alertdata.text])
    return (
        <div>

        </div>
    );
}

export default Alert;