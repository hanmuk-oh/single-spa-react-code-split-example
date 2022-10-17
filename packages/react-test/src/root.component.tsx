// import { Button } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import AlternateTimeline from './AlternativeTimeline';
const Button = lazy(() => import( /* webpackChunkName: "assets/mui" */ "@material-ui/core/Button"));



export default function Root(props) {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <section>{props.name} is mounted! <Button>Hello World</Button>
        <br />
        <AlternateTimeline />
      </section>
    </Suspense>
  )
}
