/* This file is automatically rebuilt by the Cesium build process. */
define(['./Matrix2-0e286ffc', './when-8166c7dd', './EllipseOutlineGeometry-f79ac2ae', './RuntimeError-4fdc4459', './ComponentDatatype-9ed50558', './WebGLConstants-0664004c', './GeometryOffsetAttribute-e8e698d7', './Transforms-6820a6cd', './combine-a5c4cc47', './EllipseGeometryLibrary-fb820d89', './GeometryAttribute-62016d45', './GeometryAttributes-50becc99', './IndexDatatype-797210ca'], (function (Matrix2, when, EllipseOutlineGeometry, RuntimeError, ComponentDatatype, WebGLConstants, GeometryOffsetAttribute, Transforms, combine, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, IndexDatatype) { 'use strict';

  function createEllipseOutlineGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseOutlineGeometry.EllipseOutlineGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseOutlineGeometry.EllipseOutlineGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseOutlineGeometry;

}));
