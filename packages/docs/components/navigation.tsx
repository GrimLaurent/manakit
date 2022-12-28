import { List, ListItem, ListItemSubtitle, ListItemTitle, NavigationDrawer } from 'manakit';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Navigation({routeList}: any) {
  return (
    <Fragment>
        <NavigationDrawer app>
            <List>
                {
                    routeList.map((parent: any) => {
                        return <Fragment key={parent.key}>
                            {
                                parent?.children.length > 0 ? <ListItemSubtitle>{parent.label}</ListItemSubtitle> : null
                            }
                            {
                                parent?.children.map((child: any) => {
                                    return  <Link key={parent.key + '-' + child.label} href={child.path}>
                                        <ListItem>
                                            <ListItemTitle>{child.label}</ListItemTitle>
                                        </ListItem>
                                    </Link>
                                })
                            }
                        </Fragment>
                    })
                }
            </List>
        </NavigationDrawer>
    </Fragment>
  );
}
