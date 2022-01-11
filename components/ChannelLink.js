import { useRouter } from 'next/router';
import Link from 'next/link';

import { data } from 'data';
import * as Icons from 'components/icons';

const ChannelLink = ({ channel }) => {
  const Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;

  const router = useRouter();

  const server = data.find((server) => +server.id === +router.query.sid);

  const active = +channel.id === +router.query.cid;

  const state = active
    ? 'active'
    : channel.unread
    ? 'inactiveUnread'
    : 'inactiveRead';

  const classes = {
    active: 'text-white bg-gray-550/[0.32]',
    inactiveUnread:
      'text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
    inactiveRead:
      'text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
  };

  return (
    <Link href={`/servers/${server.id}/channels/${channel.id}`}>
      <a
        className={`${classes[state]} flex items-center px-2 mx-2 py-1 rounded group relative`}
      >
        {state === 'inactiveUnread' && (
          <div className="absolute left-0 w-1 h-2 -ml-2 bg-white rounded-r-full"></div>
        )}
        <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
        {channel.label}
        <Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
      </a>
    </Link>
  );
}

export default ChannelLink;
