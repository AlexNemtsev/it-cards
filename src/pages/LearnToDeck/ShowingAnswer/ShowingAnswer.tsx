import { Button } from '@/shared/ui/Button';
import { RadioGroup } from '@/shared/ui/Radiogroup';
import { Typography } from '@/shared/ui/Typography';

import s from '@/pages/LearnToDeck/LearnToDeck.module.scss';

type Props = {
  answer: string;
  image: string;
};

export const ShowingAnswer = (props: Props) => {
  const { answer, image } = props;

  const nextQuestionHandler = () => {};

  return (
    <>
      <Typography.Subtitle1 className={s.question}>
        Answer:
        <Typography.Body1 as="span"> {answer}</Typography.Body1>
      </Typography.Subtitle1>
      {image && <img alt="answer" className={s.questionImage} src={image} />}

      <Typography.Subtitle1 className={s.rate}>Rate yourself:</Typography.Subtitle1>

      <RadioGroup
        className={s.radioGroup}
        defaultValue="2"
        options={[
          { label: 'Did not know', value: '1' },
          { label: 'Forgot', value: '2' },
          { label: 'A lot of thought', value: '3' },
          { label: 'Confused', value: '4' },
          { label: 'Knew the answer', value: '5' },
        ]}
      />

      <Button fullWidth onClick={nextQuestionHandler}>
        Next Question
      </Button>
    </>
  );
};
