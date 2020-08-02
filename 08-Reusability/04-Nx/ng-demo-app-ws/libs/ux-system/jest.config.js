module.exports = {
  name: 'ux-system',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ux-system',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
