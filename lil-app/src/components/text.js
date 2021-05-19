import { Text } from "react-native";
import styled from "styled-components";
import { compose, color, typography } from "styled-system";

const TextBox = styled(Text)(compose(color, typography));

export default Text;
