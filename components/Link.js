import clsx from 'clsx';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, prefetch, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = ({ activeClassName, router, className: classNameProps, innerRef, naked, ...props }) => {

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName,
  });

  if (naked)
    return <NextComposed className={className} ref={innerRef} {...props} />;

  return <MuiLink component={NextComposed} className={className} ref={innerRef} {...props} />;
};

const RouterLink = withRouter(Link);

export default React.forwardRef((props, ref) => 
  <RouterLink {...props} innerRef={ref} />
);
