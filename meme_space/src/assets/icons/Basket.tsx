import { Svg, SvgProps } from "../../utils/svg-wrapper";

export const BasketIcon: React.FC<SvgProps> = ({ className }) => (
  <Svg
    className={className}
    width="32"
    height="30"
    viewBox="0 0 32 30"
    fill="inherit"
    opacity="inherit"
  >
    <path
      opacity="inherit"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.16868 3.89926C1.24214 3.89592 2.37075 3.93933 3.67299 3.9961C4.97857 4.04952 6.11051 4.10295 6.19399 4.11296C6.27747 4.12632 6.42105 4.16973 6.5112 4.2098C6.6047 4.25321 6.73826 4.34002 6.81172 4.40346C6.88518 4.46691 6.99537 4.61383 7.05881 4.73403C7.13895 4.89097 7.30256 5.43524 8.15069 8.55394L12.1576 8.57063C15.8773 8.58733 16.1712 8.59067 16.3114 8.64743C16.3949 8.67748 16.5351 8.76096 16.6253 8.83108C16.7154 8.89786 16.8423 9.03143 16.9024 9.12158C16.9659 9.21507 17.0393 9.37201 17.0694 9.47218C17.1028 9.59239 17.1161 9.73597 17.1061 9.88957C17.0961 10.0532 17.0593 10.1901 16.9926 10.337C16.9291 10.4772 16.8356 10.6041 16.7188 10.711C16.6253 10.8011 16.475 10.908 16.2279 11.0249L12.5449 11.0349C9.6299 11.0382 8.86525 11.0516 8.86191 11.085C8.86191 11.105 9.4162 13.1418 11.3195 20.0905L26.1416 20.0738L27.3871 15.566C28.0716 13.0884 28.6293 11.0549 28.6326 11.0482C28.6326 11.0449 27.5006 11.0416 26.1216 11.0416C23.6974 11.0416 23.6006 11.0416 23.3902 10.9748C23.27 10.938 23.0997 10.8512 23.0096 10.7844C22.9194 10.7143 22.7925 10.5841 22.7324 10.4906C22.669 10.4004 22.5955 10.2502 22.5688 10.1567C22.5421 10.0665 22.5221 9.90626 22.5221 9.80609C22.5221 9.70592 22.5455 9.53897 22.5755 9.43879C22.6056 9.33862 22.6657 9.20172 22.7057 9.13828C22.7458 9.07483 22.8526 8.95463 22.9428 8.87449C23.033 8.79101 23.1732 8.69418 23.2567 8.65745C23.4036 8.58733 23.4503 8.58733 30.586 8.58733L30.7863 8.68082C30.8998 8.73759 31.0601 8.85112 31.1536 8.94795C31.2638 9.05814 31.3506 9.19504 31.404 9.32193C31.4641 9.47218 31.4842 9.58571 31.4842 9.7727C31.4842 9.99976 31.3372 10.5507 29.8714 15.8665C28.9865 19.0821 28.2252 21.79 28.1785 21.8869C28.1351 21.9804 28.0316 22.1273 27.9481 22.2108C27.8646 22.2942 27.7244 22.3978 27.6309 22.4445C27.5407 22.4912 27.3637 22.5447 27.2402 22.5614C27.0866 22.5847 24.215 22.5948 10.1174 22.5781L9.88367 22.4679C9.75345 22.4078 9.58315 22.2942 9.50636 22.2174C9.42622 22.1406 9.32271 22.0071 9.2793 21.9203C9.23589 21.8301 9.15575 21.5997 9.10233 21.4027C9.04556 21.2024 8.32432 18.5879 7.49957 15.5927C6.67148 12.5942 5.99364 10.12 5.99364 10.0999C5.99364 10.0766 5.7766 9.27518 5.50948 8.3202C5.24235 7.36523 5.01196 6.5772 4.99526 6.56719C4.97857 6.55717 4.14713 6.5171 3.15209 6.47369C2.15371 6.43028 1.2221 6.3802 1.0852 6.3635C0.948298 6.34681 0.771327 6.30006 0.691189 6.26667C0.61439 6.22994 0.47081 6.12643 0.373977 6.03627C0.280483 5.94612 0.153598 5.78584 0.100172 5.67899C0.00667816 5.49534 0 5.45527 0 5.13138C0.00333908 4.84088 0.0133563 4.75407 0.0767988 4.62384C0.116868 4.53369 0.213701 4.39345 0.2905 4.30997C0.370638 4.22315 0.500862 4.1163 0.584339 4.06956C0.667816 4.01947 0.801379 3.96271 0.884856 3.93933C0.968333 3.9193 1.09522 3.89926 1.16868 3.89926ZM13.2895 23.1357C13.3263 23.1324 13.4999 23.1457 13.6735 23.1624C13.8472 23.1824 14.1043 23.2292 14.2412 23.2659C14.3781 23.3026 14.6118 23.3895 14.7587 23.4596C14.9056 23.5264 15.116 23.6432 15.2262 23.7134C15.3364 23.7868 15.5467 23.9604 15.6937 24.1007C15.8406 24.2409 16.0376 24.468 16.1344 24.6015C16.2279 24.7384 16.3581 24.9622 16.4249 25.0991C16.4884 25.236 16.5819 25.4831 16.6319 25.65C16.7054 25.8971 16.7221 26.0373 16.7355 26.4347C16.7488 26.8287 16.7388 26.979 16.6854 27.2361C16.652 27.4097 16.5685 27.6802 16.5051 27.8371C16.445 27.994 16.3047 28.2545 16.1979 28.4215C16.091 28.5884 15.8873 28.8355 15.7471 28.9757C15.6069 29.1126 15.3965 29.2929 15.2763 29.3731C15.1561 29.4532 14.9223 29.5834 14.7587 29.6602C14.5918 29.7404 14.3313 29.8339 14.1744 29.8706C14.0174 29.9073 13.7637 29.9541 13.6067 29.9775C13.3897 30.0075 13.2595 30.0075 13.0558 29.9775C12.9089 29.9541 12.6618 29.9073 12.5048 29.8706C12.3479 29.8339 12.0841 29.7404 11.9205 29.6602C11.7536 29.5834 11.5298 29.4599 11.4196 29.3831C11.3095 29.3096 11.1325 29.1694 11.0223 29.0692C10.9154 28.9691 10.7552 28.7988 10.6684 28.6886C10.5849 28.5784 10.458 28.3981 10.3912 28.2879C10.3278 28.1777 10.2243 27.9673 10.1642 27.8204C10.1074 27.6735 10.0306 27.4097 9.99386 27.2361C9.94043 26.9756 9.93042 26.8287 9.94377 26.4347C9.95713 26.0373 9.97383 25.8971 10.0473 25.65C10.0974 25.4831 10.1909 25.236 10.2543 25.0991C10.3211 24.9622 10.4513 24.7384 10.5448 24.6015C10.6416 24.468 10.8386 24.2409 10.9856 24.1007C11.1325 23.9604 11.3428 23.7868 11.453 23.7134C11.5632 23.6432 11.7736 23.5264 11.9205 23.4596C12.0674 23.3895 12.3012 23.3026 12.4381 23.2659C12.575 23.2258 12.8087 23.1824 12.9556 23.1657C13.1025 23.1524 13.2528 23.1357 13.2895 23.1357ZM12.6852 25.9138C12.5516 26.0474 12.5015 26.1275 12.4548 26.2844C12.4147 26.4247 12.4013 26.5382 12.418 26.6684C12.428 26.7786 12.4748 26.9189 12.5316 27.019C12.585 27.1092 12.6952 27.2361 12.7753 27.2962C12.8554 27.3596 13.0057 27.4331 13.1059 27.4598C13.2261 27.4932 13.343 27.5032 13.4398 27.4898C13.5233 27.4765 13.6502 27.4398 13.7236 27.4064C13.7971 27.3763 13.9139 27.2928 13.9807 27.2261C14.0508 27.1593 14.141 27.0391 14.1777 26.9589C14.2178 26.8821 14.2579 26.7419 14.2645 26.6517C14.2779 26.5449 14.2612 26.4147 14.2245 26.2844C14.1777 26.1275 14.1276 26.0474 13.9941 25.9138C13.8805 25.8036 13.767 25.7268 13.6568 25.6901C13.5633 25.6567 13.4131 25.6333 13.3229 25.6367C13.2294 25.6367 13.0892 25.6634 13.0057 25.6934C12.9156 25.7235 12.7853 25.8136 12.6852 25.9138ZM23.8577 23.1524C24.0146 23.1591 24.2551 23.1891 24.392 23.2192C24.5289 23.2459 24.7626 23.3127 24.9095 23.3661C25.0564 23.4195 25.2735 23.523 25.3937 23.5931C25.5139 23.6633 25.7309 23.8169 25.8745 23.9337C26.0214 24.0506 26.2318 24.261 26.342 24.4012C26.4555 24.5414 26.6024 24.7618 26.6726 24.8854C26.7427 25.0123 26.8362 25.2059 26.8796 25.3161C26.923 25.4263 26.9931 25.65 27.0332 25.817C27.0899 26.0474 27.1066 26.2177 27.11 26.5516C27.11 26.7886 27.0899 27.0758 27.0666 27.186C27.0432 27.2962 26.9931 27.4832 26.9564 27.6034C26.9196 27.7236 26.8362 27.9239 26.7694 28.0542C26.7059 28.1844 26.5991 28.3714 26.5323 28.4715C26.4655 28.5717 26.2919 28.7821 26.145 28.9357C25.9981 29.0893 25.7576 29.2929 25.6107 29.3898C25.4638 29.49 25.2468 29.6135 25.1266 29.6669C25.0064 29.7237 24.8127 29.7972 24.6925 29.8339C24.5723 29.8706 24.2951 29.9274 24.0748 29.9574C23.6974 30.0109 23.654 30.0109 23.3068 29.9574C23.1031 29.9274 22.8092 29.8573 22.6456 29.8038C22.4854 29.7504 22.2683 29.6636 22.1615 29.6102C22.0579 29.5567 21.8643 29.4399 21.7374 29.3497C21.6072 29.2596 21.4002 29.0793 21.2733 28.9524C21.1497 28.8255 20.9661 28.6018 20.8659 28.4548C20.7691 28.3079 20.6422 28.0842 20.5821 27.954C20.5253 27.8238 20.4418 27.5767 20.3951 27.403C20.3517 27.2294 20.3049 26.9356 20.2949 26.7519C20.2849 26.5582 20.2916 26.2911 20.3183 26.1175C20.3383 25.9505 20.3951 25.6968 20.4418 25.5498C20.4886 25.4029 20.5787 25.1792 20.6455 25.049C20.709 24.9188 20.8192 24.7318 20.8859 24.6316C20.9561 24.5314 21.0829 24.3678 21.1731 24.2676C21.2632 24.1675 21.4502 23.9972 21.5871 23.887C21.724 23.7768 21.9277 23.6399 22.0379 23.5765C22.1481 23.5163 22.3618 23.4195 22.5121 23.3627C22.6657 23.3093 22.8593 23.2459 22.9461 23.2258C23.0363 23.2058 23.2099 23.1758 23.3402 23.1624C23.467 23.1457 23.7008 23.1424 23.8577 23.1524ZM22.9996 25.9572C22.9428 26.0273 22.8693 26.1442 22.8393 26.2177C22.8092 26.2911 22.7825 26.4247 22.7792 26.5182C22.7759 26.6083 22.7959 26.7586 22.8226 26.8521C22.8526 26.9456 22.9294 27.0791 23.0096 27.1693C23.083 27.2528 23.2199 27.3563 23.3101 27.403C23.437 27.4665 23.5271 27.4832 23.7075 27.4832C23.9078 27.4865 23.9679 27.4698 24.1248 27.383C24.235 27.3196 24.3586 27.2127 24.432 27.1159C24.4988 27.0257 24.5723 26.8988 24.589 26.8354C24.609 26.7719 24.6257 26.635 24.6257 26.5349C24.6257 26.4213 24.599 26.2945 24.5556 26.201C24.5189 26.1175 24.432 25.9939 24.3653 25.9238C24.2985 25.8537 24.1816 25.7635 24.1081 25.7268C24.0247 25.6801 23.8878 25.65 23.7408 25.6433C23.5338 25.63 23.4837 25.64 23.3068 25.7268C23.1966 25.7836 23.0597 25.8838 22.9996 25.9572ZM28.8997 0.00255909C29.0767 0.00923725 29.2036 0.0359499 29.3338 0.0960533C29.434 0.139461 29.5842 0.236295 29.6677 0.313093C29.7512 0.386553 29.8714 0.54349 29.9315 0.660357C30.0317 0.844007 30.0517 0.914127 30.0617 1.15788C30.0717 1.36156 30.0617 1.48845 30.025 1.60866C29.9949 1.69881 29.9215 1.84907 29.8614 1.93922C29.8013 2.02938 29.6844 2.15626 29.6009 2.21637C29.5174 2.27981 29.3438 2.36997 29.2169 2.41671C29.0867 2.46346 28.7728 2.58367 28.5157 2.68718C28.2586 2.78735 27.8379 2.971 27.5808 3.09455C27.3237 3.22143 26.9397 3.42177 26.7293 3.54532C26.519 3.66553 26.135 3.90594 25.8779 4.07957C25.6207 4.24987 25.2301 4.53703 25.0097 4.714C24.7893 4.88763 24.4521 5.17813 24.2584 5.35844C24.0647 5.53541 23.7241 5.876 23.4971 6.11641C23.2734 6.35349 22.9428 6.7308 22.7692 6.95118C22.5922 7.17156 22.295 7.5856 22.1047 7.86943C21.9144 8.15325 21.6506 8.58065 21.517 8.82106C21.3835 9.05814 21.1998 9.41208 21.1097 9.60575C21.0195 9.79941 20.8759 10.13 20.7858 10.3403C20.6989 10.5507 20.552 10.9581 20.4585 11.2419C20.365 11.5257 20.2348 11.9765 20.168 12.2436C20.1046 12.5107 20.0144 12.9381 19.9677 13.1953C19.9243 13.4524 19.8642 13.8831 19.8341 14.1536C19.8074 14.4274 19.784 14.6878 19.784 14.7379C19.784 14.818 19.9009 14.7145 20.6923 13.9265C21.3467 13.2754 21.6506 12.9949 21.7708 12.9348C21.8609 12.8881 22.0279 12.8346 22.1381 12.8146C22.285 12.7879 22.3919 12.7879 22.5388 12.8146C22.649 12.8346 22.8126 12.8847 22.9061 12.9281C23.0062 12.9749 23.1431 13.0851 23.25 13.2019C23.3568 13.3188 23.4537 13.4657 23.4938 13.5692C23.5271 13.6661 23.5672 13.8263 23.5772 13.9198C23.5906 14.0367 23.5806 14.1703 23.5438 14.3138C23.5138 14.4341 23.4437 14.5977 23.3902 14.6811C23.3368 14.7646 22.3885 15.733 21.2799 16.8382C19.5202 18.5912 19.2431 18.855 19.0828 18.9251C18.9326 18.9919 18.8424 19.0053 18.582 19.0053C18.3048 19.0053 18.238 18.9919 18.0644 18.9118C17.8841 18.8316 17.6437 18.6012 15.8206 16.7747C14.1744 15.1286 13.7603 14.6945 13.6835 14.5476C13.6001 14.384 13.59 14.3305 13.59 14.03C13.59 13.7362 13.6001 13.6727 13.6802 13.5125C13.7269 13.4123 13.8405 13.2554 13.9306 13.1685C14.0174 13.0784 14.1644 12.9682 14.2579 12.9248C14.348 12.8814 14.5083 12.8313 14.6085 12.8146C14.722 12.7946 14.8689 12.7946 14.9991 12.8146C15.116 12.8313 15.2896 12.8847 15.3831 12.9315C15.5167 12.9983 15.7738 13.232 17.2731 14.7312L17.2964 14.4474C17.3064 14.2905 17.3398 13.9599 17.3665 13.7128C17.3933 13.4657 17.4534 13.045 17.5001 12.7779C17.5435 12.5107 17.647 12.0232 17.7305 11.6927C17.8106 11.3621 17.9542 10.8512 18.0477 10.5574C18.1445 10.2635 18.3115 9.79607 18.4217 9.52227C18.5319 9.24513 18.7389 8.78099 18.8791 8.48716C19.0227 8.19332 19.2631 7.73586 19.4134 7.46874C19.567 7.20161 19.8007 6.81762 19.9343 6.61727C20.0679 6.41359 20.3116 6.06966 20.4752 5.84928C20.6388 5.62891 20.9293 5.26161 21.1197 5.03121C21.31 4.80081 21.7374 4.34336 22.0713 4.01279C22.4019 3.68222 22.8526 3.2615 23.073 3.07785C23.2934 2.8942 23.6474 2.61372 23.8577 2.45678C24.0681 2.29651 24.4354 2.04274 24.6758 1.8858C24.9129 1.72886 25.2768 1.50848 25.4772 1.39162C25.6775 1.27475 26.1216 1.04435 26.4622 0.874058C26.8028 0.707105 27.2602 0.496743 27.4806 0.409927C27.701 0.323111 28.0082 0.202904 28.1651 0.146139C28.3221 0.0927142 28.4924 0.0326108 28.5491 0.0192545C28.6025 0.00255909 28.7628 -0.00411906 28.8997 0.00255909Z"
      fill="inherit"
    />
  </Svg>
);
