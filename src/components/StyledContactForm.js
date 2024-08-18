import styled from "styled-components";

const StyledContactForm = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-size: 1rem;
      color: #f1f1f1;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #444;
      background: #333;
      color: #f1f1f1;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    input[type="submit"] {
      margin-top: 1rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      padding: 12px;
      font-size: 1rem;
      transition: background 0.3s ease;

      &:hover {
        background: rgb(230, 95, 10);
      }
    }
  }
`;

export default StyledContactForm;
