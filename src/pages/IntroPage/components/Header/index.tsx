import Styled from './Header.styles.ts';
import Button from "@withpark/ui/components/Button";

export type HeaderProps = {
    goLogin: () => void;
}

const Header = ({
    goLogin
}: HeaderProps) => {

    return (
        <>
            <Styled.Header>
                <Styled.Nav>
                    <Styled.Logo>위드파크</Styled.Logo>
                    <Styled.NavMenu>
                        <Styled.NavItem>
                            <a href="#home">홈</a>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <a href="#features">특징</a>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <a href="#community">커뮤니티</a>
                        </Styled.NavItem>
                        {/*<Styled.NavItem>*/}
                        {/*    <a href="#contact">문의</a>*/}
                        {/*</Styled.NavItem>*/}
                    </Styled.NavMenu>
                    <Styled.AuthButtons>
                        <Button
                            onClick={goLogin}
                            variant="secondary"
                        >
                            시작하기
                        </Button>
                        {/*<Button variant="primary">회원가입</Button>*/}
                    </Styled.AuthButtons>
                </Styled.Nav>
            </Styled.Header>
        </>
    );
}

export default Header;
