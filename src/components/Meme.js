import React, { useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { objectToQueryParam, Submit } from "../utils/functions";
import { Button, FormContainer, FormImg, Form } from "../utils/styles";

function Meme() {
  const location = useLocation();
  const history = useHistory();
  const { template } = location.state;
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  let refsArr = [firstRef, secondRef, thirdRef, fourthRef, fifthRef];
  refsArr.length = template.box_count;
  return (
    <FormContainer>
      {template && (
        <>
          <FormImg
            src={template.url}
            alt={template.name}
            // onClick={onClick}
          />
          <Form
            onSubmit={async (e) =>
              Submit(
                template,
                firstRef,
                secondRef,
                thirdRef,
                fourthRef,
                fifthRef,
                objectToQueryParam,
                history,
                e
              )
            }
          >
            {refsArr.map((ref, index) => {
              const pholder = `Box ${index + 1} text`;
              return (
                <input
                  type="text"
                  placeholder={pholder}
                  ref={ref}
                  key={index}
                />
              );
            })}
            <Button type="submit" color="alert">
              Submit
            </Button>
          </Form>
        </>
      )}
    </FormContainer>
  );
}

export default Meme;
