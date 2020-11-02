import React from 'react';

import './approve-document.less';

const PATH = 'M480 800h80V640h160v-80H480v240z m192-518.4l-62.4-49.6-123.2 152-81.6-89.6-59.2 54.4 144 158.4L672 281.6zM144 80v864h457.6L864 680V80H144z m640 568L568 864H224V160h560v488z';

// https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=16506
export default () => (
    <svg className="icon icon-approve-document" viewBox="0 0 1024 1024">
        <path d={PATH} fill="#565D64" />
    </svg>
);
