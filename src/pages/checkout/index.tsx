import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckoutForm from '../../components/CheckoutForm';
import styles from './styles.module.scss';
import HeaderSecondary from '../../components/HeaderSecondary';
import PaymentForm from '../../components/PaymentForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Identificação', 'Pagamento', 'Confirmação'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <CheckoutForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

const Checkout: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <section>
      <HeaderSecondary />
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className={styles.checkout_form}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div className={styles.assistent_container}>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div className={styles.assistent_buttons}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Voltar
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Continuar'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Checkout;
