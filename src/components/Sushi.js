import SvgIcon from "@material-ui/core/SvgIcon";
import { useTheme } from "@material-ui/core";
export default function Sushi(props) {
  const theme = useTheme();
  return (
    <SvgIcon
      {...props}
      fontSize="default"
      viewBox="0 0 102.89256 214.46281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style dangerouslySetInnerHTML={{__html: "\n      .a {\n        fill: #f9ec31;\n      }\n    " }} />
      </defs>
      <polygon className="a" points="40.306 20.79 72.92 0.772 55.692 91.083 102.378 87.865 32.394 214.207 46.365 121.471 0.2 128.241 40.306 20.79" />
    </SvgIcon>
  );
}
