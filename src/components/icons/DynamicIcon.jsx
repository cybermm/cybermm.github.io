import React from 'react'
import loadable from '@loadable/component'

const DynamicIcon = ({ name = 'fa/FaFileExcel', ...otherProps }) => {
    const [library, iconComponent] = name.split('/')
    if (!library || !iconComponent) return

    const lib = library.toLowerCase()
    let ReactIcons = loadable.lib(() => import(`react-icons/ai`))
    if (lib === 'bs') {
        ReactIcons = loadable.lib(() => import(`react-icons/bs`))
    } else if (lib === 'bi') {
        ReactIcons = loadable.lib(() => import(`react-icons/bi`))
    } else if (lib === 'di') {
        ReactIcons = loadable.lib(() => import(`react-icons/di`))
    } else if (lib === 'fi') {
        ReactIcons = loadable.lib(() => import(`react-icons/fi`))
    } else if (lib === 'fc') {
        ReactIcons = loadable.lib(() => import(`react-icons/fc`))
    } else if (lib === 'fa') {
        ReactIcons = loadable.lib(() => import(`react-icons/fa`))
    } else if (lib === 'gi') {
        ReactIcons = loadable.lib(() => import(`react-icons/gi`))
    } else if (lib === 'go') {
        ReactIcons = loadable.lib(() => import(`react-icons/go`))
    } else if (lib === 'gr') {
        ReactIcons = loadable.lib(() => import(`react-icons/gr`))
    } else if (lib === 'hi') {
        ReactIcons = loadable.lib(() => import(`react-icons/hi`))
    } else if (lib === 'im') {
        ReactIcons = loadable.lib(() => import(`react-icons/im`))
    } else if (lib === 'io') {
        ReactIcons = loadable.lib(() => import(`react-icons/io`))
    } else if (lib === 'md') {
        ReactIcons = loadable.lib(() => import(`react-icons/md`))
    } else if (lib === 'ri') {
        ReactIcons = loadable.lib(() => import(`react-icons/ri`))
    } else if (lib === 'si') {
        ReactIcons = loadable.lib(() => import(`react-icons/si`))
    } else if (lib === 'ti') {
        ReactIcons = loadable.lib(() => import(`react-icons/ti`))
    } else if (lib === 'vsc') {
        ReactIcons = loadable.lib(() => import(`react-icons/vsc`))
    } else if (lib === 'wi') {
        ReactIcons = loadable.lib(() => import(`react-icons/wi`))
    } else if (lib === 'cg') {
        ReactIcons = loadable.lib(() => import(`react-icons/cg`))
    }

    return (
        <ReactIcons lib={lib}>
            {({ [iconComponent]: Icon }) => {
                return <Icon {...otherProps} />
            }}
        </ReactIcons>
    )
}

export default DynamicIcon
