import { Platform, PlatformInterface, PlatformSelection } from '../types';
import { newMicrobitPlatform } from './microbit';
import { newRaspberryPiPlatform } from './raspberrypi';
import { newWebPlatform } from './web';

export function getPlatformList(): PlatformSelection[] {
  return [
    { platform: 'Web', title: 'Web Python', image: '/images/webpy.png', help: 'https://edublocks.org' },
    // { title: 'Advanced Python', image: '/images/advpy.png', help: 'https://edublocks.org' },
    { platform: 'RaspberryPi', title: 'Raspberry Pi', image: '/images/pi.png', help: 'https://docs.edublocks.org/raspberrypi/' },
    { platform: 'MicroBit', title: 'micro:bit', image: '/images/microbit.png', help: 'https://docs.edublocks.org/microbit/' },
    // { title: 'CircuitPython', image: '/images/circuitplayground.png', help: 'https://edublocks.org' },
  ];
}

export async function getPlatform(platform: Platform): Promise<PlatformInterface> {
  switch (platform) {
    case 'Web':
      return newWebPlatform();
    case 'MicroBit':
      return newMicrobitPlatform();
    case 'RaspberryPi':
      return newRaspberryPiPlatform();
  }
}
